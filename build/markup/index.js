"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markup = void 0;

var _OgImage = _interopRequireDefault(require("./OgImage"));

var _OgVideo = _interopRequireDefault(require("./OgVideo"));

var _OgAudio = _interopRequireDefault(require("./OgAudio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var markup = {
  OgImage: _OgImage["default"],
  OgVideo: _OgVideo["default"],
  OgAudeo: _OgAudio["default"]
};
exports.markup = markup;