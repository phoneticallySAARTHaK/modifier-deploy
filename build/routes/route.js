"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _models = require("../models");

var _controllers = require("../controllers");

var router = (0, _express.Router)(); //TODO: add validator
// Homepage
// -> curl -X GET http://localhost:3000/

router.get('/', _controllers.controller.index);
router.get('/favicon.ico', _controllers.controller.index); // Create New User
// -> curl -X POST http://localhost:3000/alter -d 'user_name=hxyro'

router.post('/alter', _controllers.validator.trimmed(['user_name']), _controllers.validator.required(['user_name']), _controllers.validator.validName(['user_name']), _controllers.validator.escaped(['user_name']), _controllers.validator.userInDB(_models.model), _controllers.controller.createUser(_models.model)); // Delete User
// -> curl -X DELETE http://localhost:3000/alter/hxyro

router["delete"]('/alter/:user_name', _controllers.controller.deleteUser(_models.model)); // Get User Details
// -> curl -X GET http://localhost:3000/hxyro

router.get('/u/:user_name', _controllers.controller.getUser(_models.model)); // Create Modifier
// -> curl -X POST http://localhost:3000/hxyro/webpai -d 'redirect_url=https://webpai.vercel.app/&asset_url=https://webpai.vercel.app/webpai-new.png&title=webpai&description=nut'

router.post('/u/:user_name/m/', _controllers.validator.trimmed(['modifier_name', 'redirect_url', 'asset_url', 'title', 'description']), _controllers.validator.required(['modifier_name', 'redirect_url', 'asset_url', 'title', 'description']), _controllers.validator.validUrl(['redirect_url', 'asset_url']), _controllers.validator.maxLength([{
  field: 'title',
  len: 30
}, {
  field: 'description',
  len: 300
}]), _controllers.validator.escaped(['title', 'description']), _controllers.validator.modifierInDB(_models.model), _controllers.controller.createModifier(_models.model)); // Delete Modifier
// -> curl -X DELETE http://localhost:3000/hxyro/webpai

router["delete"]('/u/:user_name/:modifier_name', _controllers.controller.deleteModifier(_models.model)); // Redirect
// -> curl -X GET http://localhost:3000/hxyro/webpai

router.get('/:user_name/:modifier_name', _controllers.controller.redirect(_models.model));
var _default = router;
exports["default"] = _default;