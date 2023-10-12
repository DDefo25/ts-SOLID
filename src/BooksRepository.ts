import BookModel from './db/Book/Book.model'
import { IBook } from './db/Book/Book.types'


abstract class BooksRepository {
  async add(params: IBook) {
    const newBook = new BookModel( params );
    try {
        await newBook.save()
        return newBook;
    } catch (e) {
        return e;
    }
  }

  async get(id: string) {
    try {
        const book = await BookModel.findById(id).select('-__v');
        return book;
    } catch (e) {
        return e;
    }
  }

  async getAll() {
    try {
        const books = await BookModel.find().select('-__v');
        return books;
    } catch (e) {
        return e;
    }
  }

  async update(id: string, params: IBook) {
    try {
        const book = await BookModel.findByIdAndUpdate(id, params)
        return book;
    } catch (e) {
        return e;
    }
  }

  async remove(id: string) {
    try {
        const book =  await BookModel.deleteOne({_id: id})
        return book;
    } catch (e) {
        return e;
    }
  }
}

export default BooksRepository
