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

const deleteBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await Books.deleteMany()
    res.send('Deleted all books')
  } catch (error) {
    next(error)
  }
}

const getBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const foundBook = await Books.findById(id).select(['title', 'author', 'year'])
    res.send(foundBook || 'Book not found')
  } catch (error) {
    next(error)
  }
}

const updateBook = (req: Request, res: Response) => {
  res.send('Update a book')
}

const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const { deletedCount } = await Books.deleteOne({ _id: id })
    if (deletedCount > 0) {
      res.send('Deleted book')
    } else {
      res.send('Book not found')
    }
  } catch (error) {
    next(error)
  }
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
