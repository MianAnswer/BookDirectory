import { Router } from 'express'
import handler from '../controllers/book_controller'
import bookValidator from '../middlewares/bookValidator'

const {
  getBooks,
  addBook,
  deleteBooks,
  getBook,
  updateBook,
  deleteBook,
  unacceptedMethodHandler,
  errorHandler,
} = handler

const booksRouter = Router()

booksRouter.route('/')
  .get(getBooks)
  .post(bookValidator, addBook)
  .delete(deleteBooks)
  .all(unacceptedMethodHandler)
  .all(errorHandler)

booksRouter.route('/:id')
  .get(getBook)
  .put(updateBook)
  .delete(deleteBook)

export default booksRouter
