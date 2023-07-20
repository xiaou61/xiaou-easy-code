"use strict";
exports.__esModule = true;
var SHADOW_PROPS = {
    'shadowBlur': 1,
    'shadowOffsetX': 1,
    'shadowOffsetY': 1,
    'textShadowBlur': 1,
    'textShadowOffsetX': 1,
    'textShadowOffsetY': 1,
    'textBoxShadowBlur': 1,
    'textBoxShadowOffsetX': 1,
    'textBoxShadowOffsetY': 1
};
function default_1(ctx, propName, value) {
    if (SHADOW_PROPS.hasOwnProperty(propName)) {
        return value *= ctx.dpr;
    }
    return value;
}
exports["default"] = default_1;
//# sourceMappingURL=fixShadow.js.map