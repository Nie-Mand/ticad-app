export class ApiError extends Error {
  status: number
}

export class UnauthenticatedError extends ApiError {
  status = 401
  constructor() {
    super('You are not Authenticated')
    Object.setPrototypeOf(this, UnauthenticatedError.prototype)
  }
}

export class UserNotFoundError extends ApiError {
  status = 401
  constructor() {
    super('User not found')
    Object.setPrototypeOf(this, UserNotFoundError.prototype)
  }
}

export class IncorrectPasswordError extends ApiError {
  status = 401
  constructor() {
    super('Password is incorrect')
    Object.setPrototypeOf(this, IncorrectPasswordError.prototype)
  }
}

export class NicknameAlreadyTakenError extends ApiError {
  status = 400
  constructor() {
    super('Nickname is already taken')
    Object.setPrototypeOf(this, NicknameAlreadyTakenError.prototype)
  }
}

export class EmailAlreadyTakenError extends ApiError {
  status = 400
  constructor() {
    super('Email is already taken')
    Object.setPrototypeOf(this, EmailAlreadyTakenError.prototype)
  }
}
