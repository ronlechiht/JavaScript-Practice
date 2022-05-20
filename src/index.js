import {BookModel} from './modules/book/book.model.js'
import {BookView} from './modules/book/book.view.js'
import {BorrowingModel} from './modules/borrowing-returning-book/borrowing-returning-book.model.js'
import {BorrowingView} from './modules/borrowing-returning-book/borrowing-returning-book.view.js'
import {BookController} from './modules/book/book.controller.js'
import {BorrowingController} from './modules/borrowing-returning-book/borrowing-returning-book.controller.js'

const bookApp = new BookController(new BookModel(), new BookView())
const borrowingApp = new BorrowingController(new BorrowingModel(), new BorrowingView())