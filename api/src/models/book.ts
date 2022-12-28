import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  title: { type: String, lowercase: true },
  author: { type: String, lowercase: true },
  year: { type: Number },
})

export default mongoose.model('Book', bookSchema, 'books')
