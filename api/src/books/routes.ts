import { Router } from 'express'

const booksRouter = Router()

booksRouter.get('/', (req, res) => {
  res.send('books')
})

export default booksRouter
