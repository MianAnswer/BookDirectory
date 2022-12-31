import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'
import { isValidObjectId } from 'mongoose'

const bookSchemaPUT = Joi.object({
  title: Joi.string(),
  author: Joi.string().pattern(/^[A-Za-z .-]+$/),
  year: Joi.number().integer().positive(),
})
  .required()
  .min(1)
  .options({ stripUnknown: true })

const bookSchemaPOST = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required().pattern(/^[A-Za-z .-]+$/),
  year: Joi.number().required().integer().positive(),
})
  .required()
  .options({ stripUnknown: true })

const bookValidator = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req
  const schema = (req.method === 'PUT') ? bookSchemaPUT : bookSchemaPOST
  const { error, value } = schema.validate(body)

  if (error) {
    next(error)
    return
  }

  req.body = value

  next()
}

const idValidator = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  if (isValidObjectId(id)) {
    next()
  } else {
    res.send('Invalid Id')
  }
}

export default { bookValidator, idValidator }
