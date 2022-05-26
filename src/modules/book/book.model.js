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
    this.url = '../../assets/database/db.json';
  }

  getBooks() {
    try {
      let response = fetch(url);
      return response.json();
    }
    catch(error) {
      console.log(error);
    }
  }

  add(data) {
    try {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    }
    catch(error) {
      console.log(error);
    }
  }

}
