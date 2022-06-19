import { error, info } from '../utils'
import isbot from 'isbot'
import markup from '../markup/OgImage'

const { performance } = require('perf_hooks')

const index = (_req, res) => {
  console.log('index or favicon req')
  res.send('Homepage').end()
}

const createUser = (model) => async (req, res) => {
  const { user_name } = req.body
  try {
    const user = await model.user.create({ name: user_name })
    res.json(user).end()
  } catch (e) {
    console.log(e)
  }
}

const deleteUser = (model) => async (req, res) => {
  const { user_name } = req.params
  try {
    const user = await model.user
      .findOneAndDelete({ name: user_name })
      .orFail()
      .exec()
    if (user) {
      res.json(info.Removed(user_name)).end()
    } else {
      res.json(error.DoesNotExists('user', user_name)).end()
    }
  } catch (e) {
    console.log(e)
    res.json(error.ServerError).end()
  }
}

const getUser = (model) => async (req, res) => {
  const { user_name } = req.params
  try {
    const user = await model.user
      .findOne({ name: user_name })
      .populate('modifier')
      .orFail()
      .exec()
    console.log(user)
    res.json(user).end()
  } catch (e) {
    console.log(e)
    res.json(error.ServerError).end()
  }
}

const createModifier = (model) => async (req, res) => {
  const user_name = req.params.user_name
  const { modifier_name, redirect_url, asset_url, title, description } =
    req.body
  try {
    const modifier = await model.modifier.create({
      user_name,
      modifier_name,
      redirect_url,
      asset_url,
      title,
      description,
    })
    if (modifier) {
      await model.user.findOneAndUpdate(
        { name: user_name },
        {
          $addToSet: {
            modifier: modifier._id,
          },
        }
      )
    }

    res.type('.html')
    const url = `https://urlmod.herokuapp.com/um/${modifier.modifier_name}`
    let result = `<div style="width: 95vw; height: 95vh; display: flex; justify-content: center; align-items: center;"><p>Your modified URL is <a href="${url}">${url}</a>, redirecting to <a href="${modifier.redirect_url}">${modifier.redirect_url}</a>`
    res.send(result)
  } catch (e) {
    console.log(e)
    res.json(error.ServerError).end()
  }
}

const deleteModifier = (model) => async (req, res) => {
  const { user_name, modifier_name } = req.params

  try {
    const modifier = await model.modifier
      .findOneAndDelete({ user_name, modifier_name })
      .orFail()
      .exec()
    await model.user.findOneAndUpdate(
      { name: user_name },
      {
        $pull: {
          modifier: modifier._id,
        },
      }
    )
    res.json(modifier).end()
  } catch (e) {
    console.log(e)
    res.json(error.ServerError).end()
  }
}

const redirect = (model) => async (req, res) => {
  let startTime = performance.now()
  console.log(req.get('user-agent'))
  try {
    const { user_name, modifier_name } = req.params
    const modifier = await model.modifier
      .findOne({ user_name, modifier_name })
      .orFail()
      .exec()

    if (isbot(req.get('user-agent'))) {
      console.log('BOTTTT')
      const { redirect_url, asset_url, title, description } = modifier
      res.status(200)
      res.type('html')
      res.send(
        markup(
          decodeURI(redirect_url),
          decodeURI(asset_url),
          title,
          description
        )
      )
    } else {
      console.log('NOT BOT')
      res.redirect(301, decodeURI(modifier.redirect_url))
    }
  } catch (e) {
    console.log(e)
    res.send(error.ServerError)
  }

  let endTime = performance.now()
  console.log(`Call to redirect took ${endTime - startTime} milliseconds`)
}

export default {
  index,
  createUser,
  deleteUser,
  getUser,
  createModifier,
  deleteModifier,
  redirect,
}
