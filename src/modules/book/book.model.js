export class BookModel {
  constructor({id,isbn,name,author,issued}) {
    this.id = id;
    this.isbn = isbn;
    this.name = name;
    this.author = author;
    this.issued = issued;
  }
}

export class BookManagerModel {
  constructor() {
    this.booksApi = 'http://localhost:3004/books';
  }

  async getBooks() {
    try {
      let response = await fetch(this.booksApi);
      return await response.json();
    } catch(error) {
      console.log(error);
    }
  }

  addBook(data) {
    var options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch(this.booksApi, options);
  }

  editBook(id, data) {
    var options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch('${this.booksApi}/${id}', options);
  } 

  deleteBook(id) {
    var options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch('${this.booksApi}/${id}', options);
  }
}
