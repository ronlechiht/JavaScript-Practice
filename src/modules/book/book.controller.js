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

  handleAddBookForm() {
    const addButton = document.querySelector('.add-btn');

    addButton.onclick = async function() {
      const isbn = document.querySelector('input[name="isbn-input"]').value;
      const name = document.querySelector('input[name="name-input"]').value;
      const author = document.querySelector('input[name="author-input"]').value;
      const issued = document.querySelector('input[name="issued-input"]').value;

      fetch('http://localhost:3004/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({isbn,name,author,issued}),
      })
      /*this.bookManagerModel.addBook({isbn,name,author,issued});*/
    }
  }
}