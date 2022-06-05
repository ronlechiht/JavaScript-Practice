import {
  createElement,
  getElement,
} from '../../core/utils.js';

export class BookView {
  constructor() {
    //The title of the book management app
    this.renderPageHeader();

    //The top bar
    this.renderTopBar();

    this.renderAddBookForm();
  }

  renderPageHeader() {
    const title = document.querySelector('.book-management-title');

    title.innerHTML = 'Book Management';
  }

  renderTopBar() {
    const searchInput = document.querySelector('.search-input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search by ISBN';
    searchInput.name = 'search';

    const searchButton = document.querySelector('.search-btn');
    searchButton.textContent = 'Search';
    
    const addNewButton = document.querySelector('.add-new-btn');
    addNewButton.textContent = 'Add New';
  }

  renderAddBookForm() {
    const addBookForm = document.querySelector('.book-management-add-new');
    addBookForm.style.display = 'none';

    const addBookFormTitle = createElement('h2');
    addBookFormTitle.textContent = 'Book Management Add New';

    const isbnLabel = createElement('label');
    isbnLabel.textContent = 'ISBN';
    const isbnInput = createElement('input');
    isbnInput.type = 'text';
    isbnInput.name = 'isbn-input';

    const nameLabel = createElement('label');
    nameLabel.textContent = 'Name';
    const nameInput = createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name-input';

    const authorLabel = createElement('label');
    authorLabel.textContent = 'Author';
    const authorInput = createElement('input');
    authorInput.type = 'text';
    authorInput.name = 'author-input';

    const issuedLabel = createElement('label');
    issuedLabel.textContent = 'Issued Date';
    const issuedInput = createElement('input');
    issuedInput.type = 'text';
    issuedInput.name = 'issued-input';

    const addButton = createElement('button', 'add-btn');
    addButton.textContent = 'Add';

    addBookForm.append(
      addBookFormTitle, 
      isbnLabel, isbnInput,
      nameLabel, nameInput,
      authorLabel, authorInput,
      issuedLabel, issuedInput,
      addButton)
  }

  renderTableView(books) {
    const bookTable = document.querySelector('.book-management-table');

    const headerTable = `
      <tr>
        <th>ISBN</th>
        <th>Name</th>
      </tr>
    `;

    const html = books.map(function(book) {
      return `
        <tr>
          <td>${book.isbn}</td>
          <td>${book.name}</td>
          <td><a>View Detail</a></td>
      `;
    });

    bookTable.innerHTML = headerTable + html.join('');
  }

  bindAddBook(handler) {
    const addButton = document.querySelector('.add-btn');

    addButton.onclick = () => {
      const isbn = document.querySelector('input[name="isbn-input"]').value;
      const name = document.querySelector('input[name="name-input"]').value;
      const author = document.querySelector('input[name="author-input"]').value;
      const issued = document.querySelector('input[name="issued-input"]').value;
  
      const book = {
        isbn: isbn,
        name: name,
        author: author,
        issued: issued
      }

      if (this.validateForm(book)) {
        handler(book);
        hideElement('.book-management-add-new');
        this.displayBookList();
      }
    }
  }
}