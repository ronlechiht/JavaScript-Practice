import {
  displayElement,
  hideElement
} from '../../core/utils.js';

export class BookController {
  constructor(bookManagerModel, bookView) {
    this.bookManagerModel = bookManagerModel;
    this.bookView = bookView;

    this.bookView.bindOpenCloseModal();
    this.bookView.bindAddBook(this.handleAddBook);
  }

  async displayBookList() {
    try {
      const books = await this.bookManagerModel.getBooks();
      this.bookView.renderTableView(books);
    } catch(error) {
      console.log(error);
    }
  }

  handleAddBook = (book) => {
    if (this.bookView.validateForm(book)) {
      this.bookManagerModel.addBook(book);
      this.bookView.renderAddedBook(book);
      this.bookView.resetInput();
    }
  }
}