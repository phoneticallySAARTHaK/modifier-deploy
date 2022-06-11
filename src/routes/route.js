import { Router } from 'express'
import { model } from '../models'
import { controller, validator } from '../controllers'

const router = Router()
//TODO: add validator

// Homepage
// -> curl -X GET http://localhost:3000/
router.get('/', controller.index)

// Create New User
// -> curl -X POST http://localhost:3000/alter -d 'user_name=hxyro'
router.post(
  '/alter',
  validator.required(['user_name']),
  validator.validName(['user_name']),
  validator.createUser(model),
  controller.createUser(model)
)

// Delete User
// -> curl -X DELETE http://localhost:3000/alter/hxyro
router.delete('/alter/:user_name', controller.deleteUser(model))

// Get User Details
// -> curl -X GET http://localhost:3000/hxyro
router.get('/:user_name', controller.getUser(model))

// Create Modifier
// -> curl -X POST http://localhost:3000/hxyro/webpai -d 'redirect_url=https://webpai.vercel.app/&asset_url=https://webpai.vercel.app/webpai-new.png&title=webpai&description=nut'
router.post(
  '/:user_name/:modifier_name',
  validator.required(['redirect_url', 'asset_url', 'title', 'description']),
  validator.validUrl(['redirect_url', 'asset_url']),
  validator.maxLength('title', 30),
  validator.maxLength('description', 300),
  validator.createModifier(model),
  controller.createModifier(model)
)

// Delete Modifier
// -> curl -X DELETE http://localhost:3000/hxyro/webpai
router.delete('/:user_name/:modifier_name', controller.deleteModifier(model))

// Redirect
// -> curl -X GET http://localhost:3000/hxyro/webpai
router.get('/:user_name/:modifier_name', controller.redirect(model))

export default router
