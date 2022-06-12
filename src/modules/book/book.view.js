import {
  createElement,
  displayElement,
  getElement,
  hideElement,
} from '../../core/utils.js';

export class BookView {
  constructor() {
    //Get input field
    this.isbn = document.querySelector('input[name="isbn-input"]');
    this.name = document.querySelector('input[name="name-input"]');
    this.author = document.querySelector('input[name="author-input"]');
    this.issued = document.querySelector('input[name="issued-input"]');

    //Get table book and add book modal box 
    this.bookTable = document.querySelector('.book-management-table');
    this.modal = document.querySelector('.modal');

    //Get button
    this.addNewBtn = document.querySelector('.add-new-btn');
    this.closeBtn = document.querySelector('.close');
    this.addButton = document.querySelector('.add-btn');
    this.editButton = document.querySelector('.edit-btn');

  }

  resetInput() {
    this.isbn.value = '';
    this.name.value = '';
    this.author.value = ''; 
    this.issued.value = '';
  }

  renderTableView(books) {
    while (this.bookTable.firstChild) {
      this.bookTable.removeChild(this.bookTable.firstChild);
    }

    this.bookTable.innerHTML = `
      <tr>
        <th>ISBN</th>
        <th>Name</th>
      </tr>
    `

    const html = books.map(function(book) {
      return `
        <tr id="${book.id}">
          <td>${book.isbn}</td>
          <td>${book.name}</td>
          <td><a>View Detail</a></td>
          <td><button class="edit-book-btn">Edit</button></td>
          <td><button class="del-book-btn">Delete</button></td>
        </tr>
      `;
    });

    this.bookTable.innerHTML = this.bookTable.innerHTML + html.join('');
  }

  validateForm(data) {
    var isValidated = true;
    if(data.isbn == '') {
      alert('Please enter isbn of book!');
      isValidated = false;
    }

    if(data.name == '') {
      alert('Please enter name of book!');
      isValidated = false;
    }

    if(data.author == '') {
      alert('Please enter author of book!');
      isValidated = false;
    }

    if(data.issued == '') {
      alert('Please enter issued date of book!');
      isValidated = false;
    }

    return isValidated;
  }

  bindOpenCloseModal() {
    this.addNewBtn.onclick = () => {
      //Open modal box for add new book
      this.modal.style.display = 'block';
      displayElement('.add-title');
      displayElement('.add-btn');
      hideElement('.edit-title');
      hideElement('.edit-btn');
    }

    this.closeBtn.onclick = () => {
      this.modal.style.display = 'none';
    }
  }

  bindAddBook(handler) {
    this.addButton.onclick = () => {
      const book = {
        isbn: this.isbn.value,
        name: this.name.value,
        author: this.author.value,
        issued: this.issued.value
      }
      handler(book);
    }
  }

  bindOpenEditForm(handler) {
    this.bookTable.addEventListener('click', event => {
      if (event.target.className === 'edit-book-btn') {
        const id = event.target.parentElement.parentElement.id;

        //Open modal box for edit book
        this.modal.style.display = 'block';
        displayElement('.edit-btn');
        displayElement('.edit-title');
        hideElement('.add-title');
        hideElement('.add-btn');

        this.editButton.onclick = () => {
          const book = {
            isbn: this.isbn.value,
            name: this.name.value,
            author: this.author.value,
            issued: this.issued.value
          }
          handler(id,book);
        }
      }
    })
  }

  
}