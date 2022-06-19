"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var connect = function connect(url) {
  return _mongoose["default"].connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

var _default = connect;
exports["default"] = _default;