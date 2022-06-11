import {
  createElement,
  getElement,
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
    this.openBtn = document.querySelector('.open-modal-btn');
    this.closeBtn = document.querySelector('.close');
    this.addButton = document.querySelector('.add-btn');

  }

  resetInput() {
    this.isbn.value = '';
    this.name.value = '';
    this.author.value = ''; 
    this.issued.value = '';
  }

  renderTableView(books) {
    const html = books.map(function(book) {
      return `
        <tr>
          <td>${book.isbn}</td>
          <td>${book.name}</td>
          <td><a>View Detail</a></td>
        </tr>
      `;
    });

    this.bookTable.innerHTML = this.bookTable.innerHTML + html.join('');
  }

  renderAddedBook(book) {
    const html = `
      <tr>
        <td>${book.isbn}</td>
        <td>${book.name}</td>
        <td><a>View Detail</a></td>
      </tr>
    `;

    this.bookTable.innerHTML = this.bookTable.innerHTML + html;
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
    this.openBtn.onclick = () => {
      this.modal.style.display = 'block';
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
}