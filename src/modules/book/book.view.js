import {createElement} from "../../core/utils.js"
import {getElement} from "../../core/utils.js"

export class BookView {
  constructor(){
    //Book Management div
    this.bookApp = getElement('.book-management')

    //The title of the book management app
    this.title = this.renderPageHeader()

    //The top bar
    this.topbar = this.renderTopBar()

    //The book list
    this.bookList = this.renderTableView()

    //Append the title, search form, add button, book list to the app
    this.bookApp.append(this.title, this.topbar, this.bookList)

  }

  renderPageHeader() {
    //The title of the book management app
    const title = createElement('h1')
    title.textContent = 'Book Management'

    return title
  }

  renderTopBar() {
    const topbar = createElement('div')
    //The search form
    const searchForm = createElement('form')

    const searchInput = createElement('input')
    searchInput.type = 'text'
    searchInput.placeholder = 'Search by ISBN'
    searchInput.name = 'search'

    const searchButton = createElement('button')
    searchButton.textContent = 'Search'

    //Append the input and search button to the form
    searchForm.append(searchInput, searchButton)
    
    //The add new button
    const addBookButton = createElement('button')
    addBookButton.textContent = 'Add New'

    topbar.append(searchForm, addBookButton)

    return topbar
  }

  renderTableView() {
    const bookList = createElement('table')

    const headerList = createElement('tr')

    const isbnBook = createElement('th')
    isbnBook.textContent = 'ISBN'

    const nameBook = createElement('th')
    nameBook.textContent = 'Name'

    headerList.append(isbnBook, nameBook)

    bookList.append(headerList)

    return bookList
  }
}