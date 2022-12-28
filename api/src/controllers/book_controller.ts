import { Request, Response, NextFunction } from 'express'
import Books from '../models/book'

const getBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const listOfBooks = await Books.find().select(['title', 'author', 'year'])
    res.send(listOfBooks || 'Books are empty')
  } catch (error) {
    next(error)
  }
}

const addBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req
    const foundBook = await Books.findOne({ title: body.title.toLowerCase() })

    if (!foundBook) {
      const book = await Books.create(body)
      await book.save()
      res
        .status(201)
        .send('Add a book')
    } else {
      res.send('Book already exists')
    }
  } catch (error) {
    next(error)
  }
}

const deleteBooks = (req: Request, res: Response) => {
  res.send('Delete books')
}

const getBook = (req: Request, res: Response) => {
  res.send('A book')
}

const updateBook = (req: Request, res: Response) => {
  res.send('Update a book')
}

const deleteBook = (req: Request, res: Response) => {
  res.send('Delete book')
}

const unacceptedMethodHandler = (req: Request, res: Response) => {
  res
    .status(405)
    .setHeader('Accept', 'GET,POST,DELETE')

  res.send('ERROR')
}

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    res.send(err.message)
  } else {
    next()
  }
}

export default {
  getBooks,
  addBook,
  deleteBooks,
  getBook,
  updateBook,
  deleteBook,
  unacceptedMethodHandler,
  errorHandler,
}
