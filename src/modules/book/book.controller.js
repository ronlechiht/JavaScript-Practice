export class BookController {
  constructor(bookManagerModel, bookView) {
    this.bookManagerModel = bookManagerModel;
    this.bookView = bookView;

    //Display Table of Books
    this.bookManagerModel.getBooks(this.bookView.renderTableView);
  }
}