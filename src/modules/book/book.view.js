export class BookView {
  constructor(){
    //Book Management div
    this.bookApp = this.getElement('.book-management')

    //The title of the book management app
    this.title = this.createElement('h1')
    this.title.textContent = 'Book Management'

    //The search form
    this.searchForm = this.createElement('form')

    this.searchInput = this.createElement('input')
    this.searchInput.type = 'text'
    this.searchInput.placeholder = 'Search by ISBN'
    this.searchInput.name = 'search'

    this.searchButton = this.createElement('button')
    this.searchButton.textContent = 'Search'

    //Append the input and search button to the form
    this.searchForm.append(this.searchInput, this.searchButton)

    //The add new button
    this.addBookButton = this.createElement('button')
    this.addBookButton.textContent = 'Add New'

    //The book list
    this.bookList = this.createElement

    //Append the title, search form, add button, book list to the app
    this.bookApp.append(this.title, this.searchForm, this.addBookButton)

  }

  //Create an element with an optional CSS class
  createElement(tag, className) {
    const element = document.createElement(tag)
    if (className) element.classList.add(className)
    
    return element
  }

  //Retrieve an element from the DOM
  getElement(selector) {
    const element = document.querySelector(selector)

    return element
  }
}