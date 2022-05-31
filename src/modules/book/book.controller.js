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
}