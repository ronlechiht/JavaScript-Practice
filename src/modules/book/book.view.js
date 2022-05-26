import {
  createElement,
  getElement,
} from '../../core/utils.js';

export class BookView {
  constructor() {
    //Book Management div
    this.bookApp = getElement('.book-management');

    //The title of the book management app
    this.title = this.createPageHeader();

    //The top bar
    this.topBar = this.createTopBar();

    //The book list
    this.bookList = this.createTableView();

    //Append the title, search form, add button, book list to the app
    this.bookApp.append(this.title, this.topBar, this.bookList);

  }

  createPageHeader() {
    //The title of the book management app
    const title = createElement('h1');
    title.textContent = 'Book Management';

    return title;
  }

  createTopBar() {
    const topBar = createElement('div');
    //The search form
    const searchForm = createElement('form');

    const searchInput = createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search by ISBN';
    searchInput.name = 'search';

    const searchButton = createElement('button');
    searchButton.textContent = 'Search';

    //Append the input and search button to the form
    searchForm.append(searchInput, searchButton);
    
    //The add new button
    const addBookButton = createElement('button');
    addBookButton.textContent = 'Add New';

    topBar.append(searchForm, addBookButton);

    return topBar;
  }

  createTableView() {
    const bookList = createElement('table');

    const headerList = createElement('tr');

    const isbnBook = createElement('th');
    isbnBook.textContent = 'ISBN';

    const nameBook = createElement('th');
    nameBook.textContent = 'Name';

    headerList.append(isbnBook, nameBook);

    bookList.append(headerList);

    return bookList;
  }
}