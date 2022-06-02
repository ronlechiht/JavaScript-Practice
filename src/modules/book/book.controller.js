import {
  displayElement,
  hideElement
} from '../../core/utils.js';

export class BookController {
  constructor(bookManagerModel, bookView) {
    this.bookManagerModel = bookManagerModel;
    this.bookView = bookView;
  }

  async displayBookList() {
    try {
      const books = await this.bookManagerModel.getBooks();
      this.bookView.renderTableView(books);
    } catch(error) {
      console.log(error);
    }
  }

  handleAddNewButton() {
    const addNewButton = document.querySelector('.add-new-btn');

    addNewButton.onclick = () => {
      displayElement('.book-management-add-new');
    }
  }

  handleAddBookForm() {
    const addButton = document.querySelector('.add-btn');

    addButton.onclick = () => {
      const isbn = document.querySelector('input[name="isbn-input"]').value;
      const name = document.querySelector('input[name="name-input"]').value;
      const author = document.querySelector('input[name="author-input"]').value;
      const issued = document.querySelector('input[name="issued-input"]').value;
  
      this.bookManagerModel.addBook({isbn,name,author,issued});
      hideElement('.book-management-add-new');
      this.displayBookList();
    };
  }
}