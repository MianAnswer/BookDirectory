import { Router } from 'express'
import handler from '../controllers/book_controller'
import validator from '../middlewares/bookValidator'

const { bookValidator, idValidator } = validator

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

booksRouter.route('/:id')
  .all(idValidator)
  .get(getBook)
  .put(bookValidator, updateBook)
  .delete(deleteBook)

booksRouter.use(unacceptedMethodHandler)
booksRouter.use(errorHandler)

export default booksRouter
