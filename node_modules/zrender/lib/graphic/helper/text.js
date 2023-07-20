"use strict";
exports.__esModule = true;
var util_1 = require("../../core/util");
var textContain = require("../../contain/text");
var roundRectHelper = require("./roundRect");
var imageHelper = require("./image");
var fixShadow_1 = require("./fixShadow");
var constant_1 = require("../constant");
var DEFAULT_FONT = textContain.DEFAULT_FONT;
var VALID_TEXT_ALIGN = { left: true, right: 1, center: 1 };
var VALID_TEXT_VERTICAL_ALIGN = { top: 1, bottom: 1, middle: 1 };
var SHADOW_STYLE_COMMON_PROPS = [
    ['textShadowBlur', 'shadowBlur', 0],
    ['textShadowOffsetX', 'shadowOffsetX', 0],
    ['textShadowOffsetY', 'shadowOffsetY', 0],
    ['textShadowColor', 'shadowColor', 'transparent']
];
var _tmpTextPositionResult = {};
var _tmpBoxPositionResult = {};
function normalizeTextStyle(style) {
    normalizeStyle(style);
    util_1.each(style.rich, normalizeStyle);
    return style;
}
exports.normalizeTextStyle = normalizeTextStyle;
function normalizeStyle(style) {
    if (style) {
        style.font = textContain.makeFont(style);
        var textAlign = style.textAlign;
        textAlign === 'middle' && (textAlign = 'center');
        style.textAlign = (textAlign == null || VALID_TEXT_ALIGN[textAlign]) ? textAlign : 'left';
        var textVerticalAlign = style.textVerticalAlign || style.textBaseline;
        textVerticalAlign === 'center' && (textVerticalAlign = 'middle');
        style.textVerticalAlign = (textVerticalAlign == null || VALID_TEXT_VERTICAL_ALIGN[textVerticalAlign]) ? textVerticalAlign : 'top';
        var textPadding = style.textPadding;
        if (textPadding) {
            style.textPadding = util_1.normalizeCssArray(style.textPadding);
        }
    }
}
function renderText(hostEl, ctx, text, style, rect, prevEl) {
    style.rich
        ? renderRichText(hostEl, ctx, text, style, rect, prevEl)
        : renderPlainText(hostEl, ctx, text, style, rect, prevEl);
}
exports.renderText = renderText;
function renderPlainText(hostEl, ctx, text, style, rect, prevEl) {
    'use strict';
    var needDrawBg = needDrawBackground(style);
    var cachedByMe = ctx.__attrCachedBy === constant_1.ContextCachedBy.PLAIN_TEXT;
    var prevStyle;
    var checkCache = false;
    if (prevEl !== constant_1.WILL_BE_RESTORED) {
        if (prevEl) {
            prevStyle = prevEl.style;
            checkCache = !needDrawBg && cachedByMe && !!prevStyle;
        }
        ctx.__attrCachedBy = needDrawBg ? constant_1.ContextCachedBy.NONE : constant_1.ContextCachedBy.PLAIN_TEXT;
    }
    else if (cachedByMe) {
        ctx.__attrCachedBy = constant_1.ContextCachedBy.NONE;
    }
    var styleFont = style.font || DEFAULT_FONT;
    if (!checkCache || styleFont !== (prevStyle.font || DEFAULT_FONT)) {
        ctx.font = styleFont;
    }
    var computedFont = hostEl.__computedFont;
    if (hostEl.__styleFont !== styleFont) {
        hostEl.__styleFont = styleFont;
        computedFont = hostEl.__computedFont = ctx.font;
    }
    var textPadding = style.textPadding;
    var textLineHeight = style.textLineHeight;
    var contentBlock = hostEl.__textCotentBlock;
    if (!contentBlock || hostEl.__dirtyText) {
        contentBlock = hostEl.__textCotentBlock = textContain.parsePlainText(text, computedFont, textPadding, textLineHeight, style.truncate);
    }
    var outerHeight = contentBlock.outerHeight;
    var textLines = contentBlock.lines;
    var lineHeight = contentBlock.lineHeight;
    var boxPos = getBoxPosition(_tmpBoxPositionResult, hostEl, style, rect);
    var baseX = boxPos.baseX;
    var baseY = boxPos.baseY;
    var textAlign = boxPos.textAlign || 'left';
    var textVerticalAlign = boxPos.textVerticalAlign;
    applyTextRotation(ctx, style, rect, baseX, baseY);
    var boxY = textContain.adjustTextY(baseY, outerHeight, textVerticalAlign);
    var textX = baseX;
    var textY = boxY;
    if (needDrawBg || textPadding) {
        var textWidth = textContain.getWidth(text, computedFont);
        var outerWidth_1 = textWidth;
        textPadding && (outerWidth_1 += textPadding[1] + textPadding[3]);
        var boxX = textContain.adjustTextX(baseX, outerWidth_1, textAlign);
        needDrawBg && drawBackground(hostEl, ctx, style, boxX, boxY, outerWidth_1, outerHeight);
        if (textPadding) {
            textX = getTextXForPadding(baseX, textAlign, textPadding);
            textY += textPadding[0];
        }
    }
    ctx.textAlign = textAlign;
    ctx.textBaseline = 'middle';
    ctx.globalAlpha = style.opacity || 1;
    for (var i = 0; i < SHADOW_STYLE_COMMON_PROPS.length; i++) {
        var propItem = SHADOW_STYLE_COMMON_PROPS[i];
        var styleProp = propItem[0];
        var ctxProp = propItem[1];
        var val = style[styleProp];
        if (!checkCache || val !== prevStyle[styleProp]) {
            ctx[ctxProp] = fixShadow_1["default"](ctx, ctxProp, (val || propItem[2]));
        }
    }
    textY += lineHeight / 2;
    var textStrokeWidth = style.textStrokeWidth;
    var textStrokeWidthPrev = checkCache ? prevStyle.textStrokeWidth : null;
    var strokeWidthChanged = !checkCache || textStrokeWidth !== textStrokeWidthPrev;
    var strokeChanged = !checkCache || strokeWidthChanged || style.textStroke !== prevStyle.textStroke;
    var textStroke = getStroke(style.textStroke, textStrokeWidth);
    var textFill = getFill(style.textFill);
    if (textStroke) {
        if (strokeWidthChanged) {
            ctx.lineWidth = textStrokeWidth;
        }
        if (strokeChanged) {
            ctx.strokeStyle = textStroke;
        }
    }
    if (textFill) {
        if (!checkCache || style.textFill !== prevStyle.textFill) {
            ctx.fillStyle = textFill;
        }
    }
    if (textLines.length === 1) {
        textStroke && ctx.strokeText(textLines[0], textX, textY);
        textFill && ctx.fillText(textLines[0], textX, textY);
    }
    else {
        for (var i = 0; i < textLines.length; i++) {
            textStroke && ctx.strokeText(textLines[i], textX, textY);
            textFill && ctx.fillText(textLines[i], textX, textY);
            textY += lineHeight;
        }
    }
}
function renderRichText(hostEl, ctx, text, style, rect, prevEl) {
    if (prevEl !== constant_1.WILL_BE_RESTORED) {
        ctx.__attrCachedBy = constant_1.ContextCachedBy.NONE;
    }
    var contentBlock = hostEl.__textCotentBlock;
    if (!contentBlock || hostEl.__dirtyText) {
        contentBlock = hostEl.__textCotentBlock = textContain.parseRichText(text, style);
    }
    drawRichText(hostEl, ctx, contentBlock, style, rect);
}
function drawRichText(hostEl, ctx, contentBlock, style, rect) {
    var contentWidth = contentBlock.width;
    var outerWidth = contentBlock.outerWidth;
    var outerHeight = contentBlock.outerHeight;
    var textPadding = style.textPadding;
    var boxPos = getBoxPosition(_tmpBoxPositionResult, hostEl, style, rect);
    var baseX = boxPos.baseX;
    var baseY = boxPos.baseY;
    var textAlign = boxPos.textAlign;
    var textVerticalAlign = boxPos.textVerticalAlign;
    applyTextRotation(ctx, style, rect, baseX, baseY);
    var boxX = textContain.adjustTextX(baseX, outerWidth, textAlign);
    var boxY = textContain.adjustTextY(baseY, outerHeight, textVerticalAlign);
    var xLeft = boxX;
    var lineTop = boxY;
    if (textPadding) {
        xLeft += textPadding[3];
        lineTop += textPadding[0];
    }
    var xRight = xLeft + contentWidth;
    needDrawBackground(style) && drawBackground(hostEl, ctx, style, boxX, boxY, outerWidth, outerHeight);
    for (var i = 0; i < contentBlock.lines.length; i++) {
        var line = contentBlock.lines[i];
        var tokens = line.tokens;
        var tokenCount = tokens.length;
        var lineHeight = line.lineHeight;
        var usedWidth = line.width;
        var leftIndex = 0;
        var lineXLeft = xLeft;
        var lineXRight = xRight;
        var rightIndex = tokenCount - 1;
        var token = void 0;
        while (leftIndex < tokenCount
            && (token = tokens[leftIndex], !token.textAlign || token.textAlign === 'left')) {
            placeToken(hostEl, ctx, token, style, lineHeight, lineTop, lineXLeft, 'left');
            usedWidth -= token.width;
            lineXLeft += token.width;
            leftIndex++;
        }
        while (rightIndex >= 0
            && (token = tokens[rightIndex], token.textAlign === 'right')) {
            placeToken(hostEl, ctx, token, style, lineHeight, lineTop, lineXRight, 'right');
            usedWidth -= token.width;
            lineXRight -= token.width;
            rightIndex--;
        }
        lineXLeft += (contentWidth - (lineXLeft - xLeft) - (xRight - lineXRight) - usedWidth) / 2;
        while (leftIndex <= rightIndex) {
            token = tokens[leftIndex];
            placeToken(hostEl, ctx, token, style, lineHeight, lineTop, lineXLeft + token.width / 2, 'center');
            lineXLeft += token.width;
            leftIndex++;
        }
        lineTop += lineHeight;
    }
}
function applyTextRotation(ctx, style, rect, x, y) {
    if (rect && style.textRotation) {
        var origin_1 = style.textOrigin;
        if (origin_1 === 'center') {
            x = rect.width / 2 + rect.x;
            y = rect.height / 2 + rect.y;
        }
        else if (origin_1) {
            x = origin_1[0] + rect.x;
            y = origin_1[1] + rect.y;
        }
        ctx.translate(x, y);
        ctx.rotate(-style.textRotation);
        ctx.translate(-x, -y);
    }
}
function placeToken(hostEl, ctx, token, style, lineHeight, lineTop, x, textAlign) {
    var tokenStyle = style.rich[token.styleName] || {};
    tokenStyle.text = token.text;
    var textVerticalAlign = token.textVerticalAlign;
    var y = lineTop + lineHeight / 2;
    if (textVerticalAlign === 'top') {
        y = lineTop + token.height / 2;
    }
    else if (textVerticalAlign === 'bottom') {
        y = lineTop + lineHeight - token.height / 2;
    }
    !token.isLineHolder && needDrawBackground(tokenStyle) && drawBackground(hostEl, ctx, tokenStyle, textAlign === 'right'
        ? x - token.width
        : textAlign === 'center'
            ? x - token.width / 2
            : x, y - token.height / 2, token.width, token.height);
    var textPadding = token.textPadding;
    if (textPadding) {
        x = getTextXForPadding(x, textAlign, textPadding);
        y -= token.height / 2 - textPadding[2] - token.textHeight / 2;
    }
    setCtx(ctx, 'shadowBlur', util_1.retrieve3(tokenStyle.textShadowBlur, style.textShadowBlur, 0));
    setCtx(ctx, 'shadowColor', tokenStyle.textShadowColor || style.textShadowColor || 'transparent');
    setCtx(ctx, 'shadowOffsetX', util_1.retrieve3(tokenStyle.textShadowOffsetX, style.textShadowOffsetX, 0));
    setCtx(ctx, 'shadowOffsetY', util_1.retrieve3(tokenStyle.textShadowOffsetY, style.textShadowOffsetY, 0));
    setCtx(ctx, 'textAlign', textAlign);
    setCtx(ctx, 'textBaseline', 'middle');
    setCtx(ctx, 'font', token.font || DEFAULT_FONT);
    var textStrokeWidth = util_1.retrieve2(tokenStyle.textStrokeWidth, style.textStrokeWidth);
    var textStroke = getStroke(tokenStyle.textStroke || style.textStroke, textStrokeWidth);
    var textFill = getFill(tokenStyle.textFill || style.textFill);
    if (textStroke) {
        setCtx(ctx, 'lineWidth', textStrokeWidth);
        setCtx(ctx, 'strokeStyle', textStroke);
        ctx.strokeText(token.text, x, y);
    }
    if (textFill) {
        setCtx(ctx, 'fillStyle', textFill);
        ctx.fillText(token.text, x, y);
    }
}
function needDrawBackground(style) {
    return !!(style.textBackgroundColor
        || (style.textBorderWidth && style.textBorderColor));
}
function drawBackground(hostEl, ctx, style, x, y, width, height) {
    var textBackgroundColor = style.textBackgroundColor;
    var textBorderWidth = style.textBorderWidth;
    var textBorderColor = style.textBorderColor;
    var isPlainBg = util_1.isString(textBackgroundColor);
    setCtx(ctx, 'shadowBlur', style.textBoxShadowBlur || 0);
    setCtx(ctx, 'shadowColor', style.textBoxShadowColor || 'transparent');
    setCtx(ctx, 'shadowOffsetX', style.textBoxShadowOffsetX || 0);
    setCtx(ctx, 'shadowOffsetY', style.textBoxShadowOffsetY || 0);
    if (isPlainBg || (textBorderWidth && textBorderColor)) {
        ctx.beginPath();
        var textBorderRadius = style.textBorderRadius;
        if (!textBorderRadius) {
            ctx.rect(x, y, width, height);
        }
        else {
            roundRectHelper.buildPath(ctx, {
                x: x, y: y, width: width, height: height, r: textBorderRadius
            });
        }
        ctx.closePath();
    }
    if (isPlainBg) {
        setCtx(ctx, 'fillStyle', textBackgroundColor);
        if (style.fillOpacity != null) {
            var originalGlobalAlpha = ctx.globalAlpha;
            ctx.globalAlpha = style.fillOpacity * style.opacity;
            ctx.fill();
            ctx.globalAlpha = originalGlobalAlpha;
        }
        else {
            ctx.fill();
        }
    }
    else if (textBackgroundColor && textBackgroundColor.image) {
        var image = textBackgroundColor.image;
        image = imageHelper.createOrUpdateImage(image, null, hostEl, onBgImageLoaded, textBackgroundColor);
        if (image && imageHelper.isImageReady(image)) {
            ctx.drawImage(image, x, y, width, height);
        }
    }
    if (textBorderWidth && textBorderColor) {
        setCtx(ctx, 'lineWidth', textBorderWidth);
        setCtx(ctx, 'strokeStyle', textBorderColor);
        if (style.strokeOpacity != null) {
            var originalGlobalAlpha = ctx.globalAlpha;
            ctx.globalAlpha = style.strokeOpacity * style.opacity;
            ctx.stroke();
            ctx.globalAlpha = originalGlobalAlpha;
        }
        else {
            ctx.stroke();
        }
    }
}
function onBgImageLoaded(image, textBackgroundColor) {
    textBackgroundColor.image = image;
}
function getBoxPosition(out, hostEl, style, rect) {
    var baseX = style.x || 0;
    var baseY = style.y || 0;
    var textAlign = style.textAlign;
    var textVerticalAlign = style.textVerticalAlign;
    if (rect) {
        var textPosition = style.textPosition;
        if (textPosition instanceof Array) {
            baseX = rect.x + parsePercent(textPosition[0], rect.width);
            baseY = rect.y + parsePercent(textPosition[1], rect.height);
        }
        else {
            var res = (hostEl && hostEl.calculateTextPosition)
                ? hostEl.calculateTextPosition(_tmpTextPositionResult, style, rect)
                : textContain.calculateTextPosition(_tmpTextPositionResult, style, rect);
            baseX = res.x;
            baseY = res.y;
            textAlign = textAlign || res.textAlign;
            textVerticalAlign = textVerticalAlign || res.textVerticalAlign;
        }
        var textOffset = style.textOffset;
        if (textOffset) {
            baseX += textOffset[0];
            baseY += textOffset[1];
        }
    }
    out = out || {};
    out.baseX = baseX;
    out.baseY = baseY;
    out.textAlign = textAlign;
    out.textVerticalAlign = textVerticalAlign;
    return out;
}
exports.getBoxPosition = getBoxPosition;
function setCtx(ctx, prop, value) {
    ctx[prop] = fixShadow_1["default"](ctx, prop, value);
    return ctx[prop];
}
function getStroke(stroke, lineWidth) {
    return (stroke == null || lineWidth <= 0 || stroke === 'transparent' || stroke === 'none')
        ? null
        : (stroke.image || stroke.colorStops)
            ? '#000'
            : stroke;
}
exports.getStroke = getStroke;
function getFill(fill) {
    return (fill == null || fill === 'none')
        ? null
        : (fill.image || fill.colorStops)
            ? '#000'
            : fill;
}
exports.getFill = getFill;
function parsePercent(value, maxValue) {
    if (typeof value === 'string') {
        if (value.lastIndexOf('%') >= 0) {
            return parseFloat(value) / 100 * maxValue;
        }
        return parseFloat(value);
    }
    return value;
}
exports.parsePercent = parsePercent;
function getTextXForPadding(x, textAlign, textPadding) {
    return textAlign === 'right'
        ? (x - textPadding[1])
        : textAlign === 'center'
            ? (x + textPadding[3] / 2 - textPadding[1] / 2)
            : (x + textPadding[3]);
}
function needDrawText(text, style) {
    return text != null
        && !!(text
            || style.textBackgroundColor
            || (style.textBorderWidth && style.textBorderColor)
            || style.textPadding);
}
exports.needDrawText = needDrawText;
//# sourceMappingURL=text.js.map