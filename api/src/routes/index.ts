import { Router } from 'express'
import booksRouter from '../books/routes'

const router = Router()

// redirect '/' to '/books'
router.all('/', (req, res) => {
  res.redirect('books')
})

// use routes set for '/books'
router.use('/books', booksRouter)

export default router
