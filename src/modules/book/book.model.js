export class BookModel {
  constructor(){
    this.books = [
      {id: 1, isbnBook: 'ISBN-13',  nameBook: 'Ada Lovelace', authorBook: 'Ada Lovelace', issuedDate: '01/01/1900'}
    ]
  }

  addBook(id,isbn,name,author,date) {
    const book = {
      id: this.books.length > 0 ? this.books[this.books.length - 1].id + 1:1,
      isbnBook: isbn,
      nameBook: name,
      authorBook: author,
      issuedDate: date,
    }

    this.books.push(book)
  }

  editBook(id,updatedIsbn, updatedName, updatedAuthor, updatedDate) {
    this.books = this.books.map((book) =>
      book.id === id ? {id: book.id, isbnBook: updatedIsbn, nameBook: updatedName, 
      authorBook: updatedAuthor, issuedDate: updatedDate} : book,
    )
  }

  deleteBook(id) {
    this.books = this.books.filter((book) => book.id !== id)
  }
}
