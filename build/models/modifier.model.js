"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reqString = {
  type: String,
  required: true
};
var reqNumber = {
  type: Number,
  "default": 0
};
var modifierSchema = new _mongoose["default"].Schema({
  user_name: reqString,
  modifier_name: reqString,
  redirect_url: reqString,
  asset_url: reqString,
  title: reqString,
  description: reqString,
  clicks: reqNumber
}, {
  timestamps: true
});

var modifier = _mongoose["default"].model('modifier', modifierSchema);

var _default = modifier;
exports["default"] = _default;