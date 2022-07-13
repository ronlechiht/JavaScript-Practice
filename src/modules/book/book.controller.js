import {
  hideElement
} from '../../core/utils.js'

export class BookController {
  constructor (bookManagerModel, bookView) {
    this.bookManagerModel = bookManagerModel
    this.bookView = bookView

    this.bookView.bindOpenAddModal()
    this.bookView.bindCloseAddModal()
    this.bookView.bindCloseViewDetailModal()
    this.bookView.bindAddBook(this.handleAddBook)
    this.bookView.bindViewDetailBook(this.handleViewDetailBook)
    this.bookView.bindOpenEditForm(this.handleEditBook)
    this.bookView.bindDeleteBook(this.handleDeleteBook)
  }

  async displayBookList () {
    try {
      const books = await this.bookManagerModel.getBooks()
      this.bookView.renderTableView(books)
    } catch (error) {
      console.log(error)
    }
  }

  handleAddBook = (book) => {
    if (this.bookView.validateForm(book)) {
      this.bookManagerModel.addBook(book)
      this.displayBookList()
      this.bookView.resetInput()
    }
  }

  handleViewDetailBook = async (id) => {
    const books = await this.bookManagerModel.getBooks()
    const book = books.find(book => book.id === id)
    this.bookView.fillInforBook(book)
  }

  handleEditBook = (id, book) => {
    if (this.bookView.validateForm(book)) {
      this.bookManagerModel.editBook(id, book)
      this.displayBookList()
      this.bookView.resetInput()
      hideElement('.modal')
    }
  }

  handleDeleteBook = (id) => {
    this.bookManagerModel.deleteBook(id)
    this.displayBookList()
  }
}
