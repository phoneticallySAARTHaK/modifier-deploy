"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reqString = {
  type: String,
  required: true,
  unique: true
};
var userSchema = new _mongoose["default"].Schema({
  name: reqString,
  modifier: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'modifier'
  }]
}, {
  timestamps: true
});

var user = _mongoose["default"].model('user', userSchema);

var _default = user;
exports["default"] = _default;