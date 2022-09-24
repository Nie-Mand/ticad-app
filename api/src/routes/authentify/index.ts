import { Router } from 'express'
import * as controllers from './authentify.controllers'
import * as schemas from './authentify.schemas'
import { validate } from '../../core'

export default Router()
  .post('/login', [validate.body(schemas.login)], controllers.login)
  .post('/register', [validate.body(schemas.register)], controllers.register)
