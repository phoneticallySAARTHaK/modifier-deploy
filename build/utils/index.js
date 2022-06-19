"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.info = exports.error = exports.db = void 0;

var _db = _interopRequireDefault(require("./db.connect"));

var _message = _interopRequireDefault(require("./message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var error = _message["default"].error,
    info = _message["default"].info;
exports.info = info;
exports.error = error;
var db = {
  connect: _db["default"]
};
exports.db = db;