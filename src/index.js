import {
  BookManagerModel, 
  BookView, 
  BookController
} from './modules/book/index.js';
import {
  BorrowingModel, 
  BorrowingView, 
  BorrowingController
} from './modules/borrowing-returning-book/index.js';

const bookApp = new BookController(new BookManagerModel(), new BookView());
const borrowingApp = new BorrowingController(new BorrowingModel(), new BorrowingView());

bookApp.displayBookList();
bookApp.handleAddBookForm();
