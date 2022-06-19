"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = void 0;

var _user = _interopRequireDefault(require("./user.model"));

var _modifier = _interopRequireDefault(require("./modifier.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var model = {
  user: _user["default"],
  modifier: _modifier["default"]
};
exports.model = model;