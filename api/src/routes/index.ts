import { Router } from 'express'
import booksRouter from '../books/routes'

const router = Router()

router.get('/', (req, res) => {
  res.redirect('books')
})

router.use('/books', booksRouter)

export default router
