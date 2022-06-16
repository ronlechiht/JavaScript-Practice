import {
  BookManagerModel,
  BookView,
  BookController
} from './modules/book/index.js'

const bookApp = new BookController(new BookManagerModel(), new BookView())

bookApp.displayBookList()
