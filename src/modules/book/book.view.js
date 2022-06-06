import {
  createElement,
  getElement,
} from '../../core/utils.js';

export class BookView {
  constructor() {

  }

  resetInput() {
    document.querySelector('input[name="isbn-input"]').value = '';
    document.querySelector('input[name="name-input"]').value = '';
    document.querySelector('input[name="author-input"]').value = '';
    document.querySelector('input[name="issued-input"]').value = '';
  }

  renderTableView(books) {
    const bookTable = document.querySelector('.book-management-table');

    const html = books.map(function(book) {
      return `
        <tr>
          <td>${book.isbn}</td>
          <td>${book.name}</td>
          <td><a>View Detail</a></td>
        </tr>
      `;
    });

    bookTable.innerHTML = bookTable.innerHTML + html.join('');
  }

  renderAddedBook(book) {
    const bookTable = document.querySelector('.book-management-table');

    const html = `
      <tr>
        <td>${book.isbn}</td>
        <td>${book.name}</td>
        <td><a>View Detail</a></td>
      </tr>
    `;

    bookTable.innerHTML = bookTable.innerHTML + html;
  }

  validateForm(data) {
    if(data.isbn == '') {
      alert('Please enter isbn of book!');
      return false;
    }

    if(data.name == '') {
      alert('Please enter name of book!');
      return false;
    }

    if(data.author == '') {
      alert('Please enter author of book!');
      return false;
    }

    if(data.issued == '') {
      alert('Please enter issued date of book!');
      return false;
    }

    return true;
  }

  bindOpenCloseModal() {
    const modal = document.querySelector('.modal');

    const openBtn = document.querySelector('.open-modal-btn');

    const closeBtn = document.querySelector('.close');

    openBtn.onclick = () => {
      modal.style.display = 'block';
    }

    closeBtn.onclick = () => {
      modal.style.display = 'none';
    }
  }

  bindAddBook(handler) {
    const addButton = document.querySelector('.add-btn');

    addButton.onclick = () => {
      const isbn = document.querySelector('input[name="isbn-input"]').value;
      const name = document.querySelector('input[name="name-input"]').value;
      const author = document.querySelector('input[name="author-input"]').value;
      const issued = document.querySelector('input[name="issued-input"]').value;
  
      const book = {
        isbn: isbn,
        name: name,
        author: author,
        issued: issued
      }

      if (this.validateForm(book)) {
        handler(book);
        this.renderAddedBook(book);
        this.resetInput();
      }
    }
  }
}