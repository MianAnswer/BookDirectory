import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

const bookValidator = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req

  const schema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required().pattern(/^[A-Za-z .-]+$/),
    year: Joi.number().required().integer().positive(),
  })
    .required()
    .options({ stripUnknown: true })

  const { error, value } = schema.validate(body)

  if (error) {
    next(error)
    return
  }

  req.body = value

  next()
}

export default bookValidator
