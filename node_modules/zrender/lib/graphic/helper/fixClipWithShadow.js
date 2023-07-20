"use strict";
exports.__esModule = true;
var env_1 = require("../../core/env");
var shadowTemp = [
    ['shadowBlur', 0],
    ['shadowColor', '#000'],
    ['shadowOffsetX', 0],
    ['shadowOffsetY', 0]
];
function default_1(orignalBrush) {
    return (env_1["default"].browser.ie && env_1["default"].browser.version >= 11)
        ? function (ctx, prevEl) {
            var clipPaths = this.__clipPaths;
            var style = this.style;
            var modified;
            if (clipPaths) {
                for (var i = 0; i < clipPaths.length; i++) {
                    var clipPath = clipPaths[i];
                    var shape = clipPath && clipPath.shape;
                    var type = clipPath && clipPath.type;
                    if (shape && ((type === 'sector' && shape.startAngle === shape.endAngle)
                        || (type === 'rect' && (!shape.width || !shape.height)))) {
                        for (var j = 0; j < shadowTemp.length; j++) {
                            shadowTemp[j][2] = style[shadowTemp[j][0]];
                            style[shadowTemp[j][0]] = shadowTemp[j][1];
                        }
                        modified = true;
                        break;
                    }
                }
            }
            orignalBrush.call(this, ctx, prevEl);
            if (modified) {
                for (var j = 0; j < shadowTemp.length; j++) {
                    style[shadowTemp[j][0]] = shadowTemp[j][2];
                }
            }
        }
        : orignalBrush;
}
exports["default"] = default_1;
//# sourceMappingURL=fixClipWithShadow.js.map