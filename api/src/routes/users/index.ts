import { Router } from 'express'
import * as controllers from './users.controllers'
import * as schemas from './users.schemas'
import { validate, authenticate } from '../../core'

export default Router().get('/me', [authenticate()], controllers.getMyData)
