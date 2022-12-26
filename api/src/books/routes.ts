import { Router } from 'express'
import handler from './handlers'

const {
  getBooks,
  addBook,
  deleteBooks,
  getBook,
  updateBook,
  deleteBook,
  errorHandler,
} = handler

const booksRouter = Router()

booksRouter.route('/')
  .get(getBooks)
  .post(addBook)
  .delete(deleteBooks)
  .all(errorHandler)

booksRouter.route('/:id')
  .get(getBook)
  .put(updateBook)
  .delete(deleteBook)

export default booksRouter
