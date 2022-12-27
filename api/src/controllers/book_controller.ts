import { Request, Response } from 'express'
import Books from '../models/book'

const getBooks = (req: Request, res: Response) => {
  res.send('List of books')
}

const addBook = async (req: Request, res: Response) => {
  const book = await Books.create({
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    year: 1998,
  })

  await book.save()
  res.send('Add a book')
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

const errorHandler = (req: Request, res: Response) => {
  res
    .status(405)
    .setHeader('Accept', 'GET,POST,DELETE')

  res.send('ERROR')
}

export default {
  getBooks,
  addBook,
  deleteBooks,
  getBook,
  updateBook,
  deleteBook,
  errorHandler,
}
