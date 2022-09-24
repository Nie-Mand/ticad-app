import { Schema } from 'joi'
import { RequestHandler } from 'express'

function validateBody<T extends Schema>(schema: T): RequestHandler {
  return (rq, rs, nxt) => {
    const body = rq.body
    const { error } = schema.validate(body)
    if (error) {
      return rs.status(400).send(error.details[0].message)
    }
    nxt()
  }
}

function validateParams<T extends Schema>(schema: T): RequestHandler {
  return (rq, rs, nxt) => {
    const params = rq.params
    const { error } = schema.validate(params)
    if (error) {
      return rs.status(400).send(error.details[0].message)
    }
    nxt()
  }
}

function validateQuery<T extends Schema>(schema: T): RequestHandler {
  return (rq, rs, nxt) => {
    const query = rq.query
    const { error } = schema.validate(query)
    if (error) {
      return rs.status(400).send(error.details[0].message)
    }
    nxt()
  }
}

export const validate = {
  body: validateBody,
  params: validateParams,
  query: validateQuery,
}
