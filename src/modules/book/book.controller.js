import {BookModel} from './book.model.js'
import {BookView} from './book.view.js'

export class BookController {
  constructor(bookModel, bookView) {
    this.bookModel = bookModel
    this.bookView = bookView
  }
}