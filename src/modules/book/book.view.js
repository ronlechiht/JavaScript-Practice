import {createElement} from "../../core/utils.js"
import {getElement} from "../../core/utils.js"

export class BookView {
  constructor(){
    //Book Management div
    this.bookApp = getElement('.book-management')

    //The title of the book management app
    this.title = createElement('h1')
    this.title.textContent = 'Book Management'

    //The search form
    this.searchForm = createElement('form')

    this.searchInput = createElement('input')
    this.searchInput.type = 'text'
    this.searchInput.placeholder = 'Search by ISBN'
    this.searchInput.name = 'search'

    this.searchButton = createElement('button')
    this.searchButton.textContent = 'Search'

    //Append the input and search button to the form
    this.searchForm.append(this.searchInput, this.searchButton)

    //The add new button
    this.addBookButton = createElement('button')
    this.addBookButton.textContent = 'Add New'

    //The book list
    this.bookList = createElement('table')

    this.headerList = createElement('tr')

    this.isbnBook = createElement('th')
    this.isbnBook.textContent = 'ISBN'

    this.nameBook = createElement('th')
    this.nameBook.textContent = 'Name'

    this.headerList.append(this.isbnBook, this.nameBook)

    this.bookList.append(this.headerList)

    //Append the title, search form, add button, book list to the app
    this.bookApp.append(this.title, this.searchForm, this.addBookButton, this.bookList)

  }


}