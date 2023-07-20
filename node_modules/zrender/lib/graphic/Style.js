"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var fixShadow_1 = require("./helper/fixShadow");
var constant_1 = require("./constant");
var STYLE_COMMON_PROPS = [
    ['shadowBlur', 0], ['shadowOffsetX', 0], ['shadowOffsetY', 0], ['shadowColor', '#000'],
    ['lineCap', 'butt'], ['lineJoin', 'miter'], ['miterLimit', 10]
];
function createLinearGradient(ctx, obj, rect) {
    var x = obj.x == null ? 0 : obj.x;
    var x2 = obj.x2 == null ? 1 : obj.x2;
    var y = obj.y == null ? 0 : obj.y;
    var y2 = obj.y2 == null ? 0 : obj.y2;
    if (!obj.global) {
        x = x * rect.width + rect.x;
        x2 = x2 * rect.width + rect.x;
        y = y * rect.height + rect.y;
        y2 = y2 * rect.height + rect.y;
    }
    x = isNaN(x) ? 0 : x;
    x2 = isNaN(x2) ? 1 : x2;
    y = isNaN(y) ? 0 : y;
    y2 = isNaN(y2) ? 0 : y2;
    var canvasGradient = ctx.createLinearGradient(x, y, x2, y2);
    return canvasGradient;
}
function createRadialGradient(ctx, obj, rect) {
    var width = rect.width;
    var height = rect.height;
    var min = Math.min(width, height);
    var x = obj.x == null ? 0.5 : obj.x;
    var y = obj.y == null ? 0.5 : obj.y;
    var r = obj.r == null ? 0.5 : obj.r;
    if (!obj.global) {
        x = x * width + rect.x;
        y = y * height + rect.y;
        r = r * min;
    }
    var canvasGradient = ctx.createRadialGradient(x, y, 0, x, y, r);
    return canvasGradient;
}
var TextStyleOption = (function () {
    function TextStyleOption() {
    }
    return TextStyleOption;
}());
exports.TextStyleOption = TextStyleOption;
var StyleOption = (function (_super) {
    tslib_1.__extends(StyleOption, _super);
    function StyleOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StyleOption;
}(TextStyleOption));
exports.StyleOption = StyleOption;
var Style = (function (_super) {
    tslib_1.__extends(Style, _super);
    function Style(opts) {
        var _this = _super.call(this) || this;
        if (opts) {
            _this.extendFrom(opts, true);
        }
        return _this;
    }
    Style.prototype.bind = function (ctx, el, prevEl) {
        var style = this;
        var prevStyle = prevEl && prevEl.style;
        var notCheckCache = !prevStyle || ctx.__attrCachedBy !== constant_1.ContextCachedBy.STYLE_BIND;
        ctx.__attrCachedBy = constant_1.ContextCachedBy.STYLE_BIND;
        for (var i = 0; i < STYLE_COMMON_PROPS.length; i++) {
            var prop = STYLE_COMMON_PROPS[i];
            var styleName = prop[0];
            if (notCheckCache || style[styleName] !== prevStyle[styleName]) {
                ctx[styleName] =
                    fixShadow_1["default"](ctx, styleName, (style[styleName] || prop[1]));
            }
        }
        if ((notCheckCache || style.fill !== prevStyle.fill)) {
            ctx.fillStyle = style.fill;
        }
        if ((notCheckCache || style.stroke !== prevStyle.stroke)) {
            ctx.strokeStyle = style.stroke;
        }
        if ((notCheckCache || style.opacity !== prevStyle.opacity)) {
            ctx.globalAlpha = style.opacity == null ? 1 : style.opacity;
        }
        if ((notCheckCache || style.blend !== prevStyle.blend)) {
            ctx.globalCompositeOperation = style.blend || 'source-over';
        }
        if (this.hasStroke()) {
            var lineWidth = style.lineWidth;
            ctx.lineWidth = lineWidth / ((this.strokeNoScale && el && el.getLineScale) ? el.getLineScale() : 1);
        }
    };
    Style.prototype.hasFill = function () {
        var fill = this.fill;
        return fill != null && fill !== 'none';
    };
    Style.prototype.hasStroke = function () {
        var stroke = this.stroke;
        return stroke != null && stroke !== 'none' && this.lineWidth > 0;
    };
    Style.prototype.extendFrom = function (otherStyle, overwrite) {
        if (otherStyle) {
            for (var name_1 in otherStyle) {
                if (otherStyle.hasOwnProperty(name_1)
                    && (overwrite === true
                        || (overwrite === false
                            ? !this.hasOwnProperty(name_1)
                            : otherStyle[name_1] != null))) {
                    this[name_1] = otherStyle[name_1];
                }
            }
        }
    };
    Style.prototype.set = function (obj, value) {
        if (typeof obj === 'string') {
            this[obj] = value;
        }
        else {
            this.extendFrom(obj, true);
        }
    };
    Style.prototype.clone = function () {
        var newStyle = new Style();
        newStyle.extendFrom(this, true);
        return newStyle;
    };
    Style.getGradient = function (ctx, obj, rect) {
        var canvasGradient = obj.type === 'radial'
            ? createRadialGradient(ctx, obj, rect)
            : createLinearGradient(ctx, obj, rect);
        var colorStops = obj.colorStops;
        for (var i = 0; i < colorStops.length; i++) {
            canvasGradient.addColorStop(colorStops[i].offset, colorStops[i].color);
        }
        return canvasGradient;
    };
    Style.initDefaultProps = (function () {
        var styleProto = Style.prototype;
        styleProto.fill = '#000';
        styleProto.stroke = null;
        styleProto.opacity = 1;
        styleProto.lineDashOffset = 0;
        styleProto.shadowBlur = 0;
        styleProto.shadowOffsetX = 0;
        styleProto.shadowOffsetY = 0;
        styleProto.shadowColor = '#000';
        styleProto.lineWidth = 1;
        styleProto.lineCap = 'butt';
        styleProto.miterLimit = 10;
        styleProto.strokeNoScale = false;
        styleProto.textStrokeWidth = 0;
        styleProto.textPosition = 'inside';
        styleProto.textDistance = 5;
        styleProto.textShadowColor = 'transparent';
        styleProto.textShadowBlur = 0;
        styleProto.textShadowOffsetX = 0;
        styleProto.textShadowOffsetY = 0;
        styleProto.textBoxShadowColor = 'transparent';
        styleProto.textBoxShadowBlur = 0;
        styleProto.textBoxShadowOffsetX = 0;
        styleProto.textBoxShadowOffsetY = 0;
        styleProto.textRotation = 0;
        styleProto.textBorderWidth = 0;
        styleProto.textBorderRadius = 0;
    })();
    return Style;
}(StyleOption));
exports["default"] = Style;
;
//# sourceMappingURL=Style.js.map