export class BookModel {
  constructor ({ id, isbn, name, author, issued }) {
    this.id = id
    this.isbn = isbn
    this.name = name
    this.author = author
    this.issued = issued
  }
}

export class BookManagerModel {
  constructor () {
    this.booksApi = 'http://localhost:3004/books'
  }

  async getBooks () {
    return fetch(this.booksApi).then((value) => value.json())
  }

  async getBook (id) {
    const books = fetch(this.booksApi).then((value) => value.json())
  }

  async addBook (data) {
    fetch(this.booksApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  editBook (id, data) {
    fetch(this.booksApi + '/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  deleteBook (id) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(this.booksApi + '/' + id, options)
  }
}
