import { isRequired, isEmail, isNumber } from '@formiz/validations'

export const required = {
  rule: isRequired(),
  message: 'This field is required',
}

export const email = {
  rule: isEmail(),
  message: 'This field must be a valid email',
}

export const number = {
  rule: isNumber(),
  message: 'This field must be a number',
}
