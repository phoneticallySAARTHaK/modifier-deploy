"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userDashboard_get = exports.redirect_url_get = exports.index_get = exports.create_user_post = exports.create_url_post = void 0;

var _isbot = _interopRequireDefault(require("isbot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _require = require('express-validator'),
    body = _require.body,
    validationResult = _require.validationResult; //import { markup } from 'markup'
//import { user, modifier } from 'models/index.js'


var index_get = function index_get(req, res) {
  res.send('Homepage');
};

exports.index_get = index_get;

var userDashboard_get = function userDashboard_get(req, res) {
  // Display user data
  res.send("".concat(req.params.userName, " Dashboard"));
};

exports.userDashboard_get = userDashboard_get;

var redirect_url_get = function redirect_url_get(req, res) {
  if ((0, _isbot["default"])(req.get('user-agent'))) {// Render template string
  } else {
    // get original url
    res.send(req.params);
  }
};

exports.redirect_url_get = redirect_url_get;
var create_url_post = [body('urlCode').trim().isAlphanumeric('en-US', {
  ingore: '-'
}).withMessage('UrlCode contains invalid characters').escape(), body('url').trim().isURL().withMessage('Invalid website url').escape(), body('title').trim().isLength({
  max: 30
}).withMessage('tilte <= 30').escape(), body('asset_url').trim().isURL().withMessage('Invalid image url').escape(), body('description').trim().isLength({
  max: 100
}).withMessage('description too long').escape(), function (req, res) {
  var errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  } // update user data


  res.send(req.body);
}];
exports.create_url_post = create_url_post;
var create_user_post = [body('userName').trim().isAlphanumeric('en-US', {
  ingore: '-'
}).withMessage('Username must contain only alphanumeric characters').escape(), function (req, res) {
  var newUser = req.body.userName; // Add user to DB

  res.send(req.body);
}];
exports.create_user_post = create_user_post;