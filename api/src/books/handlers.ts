import { Request, Response } from 'express'

const getBooks = (req: Request, res: Response) => {
  res.send('List of books')
}

const addBook = (req: Request, res: Response) => {
  res.send('Add a books')
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
