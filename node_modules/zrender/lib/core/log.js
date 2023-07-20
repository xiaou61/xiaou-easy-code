var _config = require("../config");

var debugMode = _config.debugMode;

var logError = function () {};

if (debugMode === 1) {
  logError = console.error;
}

var _default = logError;
module.exports = _default;