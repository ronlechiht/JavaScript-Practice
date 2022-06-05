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
    
    const addBookButton = document.querySelector('.add-book-btn');
    addBookButton.textContent = 'Add New';
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

    bookTable.innerHTML = headerTable + html.join();
  }
}