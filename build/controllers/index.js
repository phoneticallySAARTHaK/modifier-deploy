"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validator = exports.controller = void 0;

var _controller = _interopRequireDefault(require("./controller"));

var _validator = _interopRequireDefault(require("./validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var controller = _controller["default"];
exports.controller = controller;
var validator = _validator["default"];
exports.validator = validator;