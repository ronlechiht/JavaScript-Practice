import {
  createElement,
  getElement,
} from '../../core/utils.js';

export class BookView {
  constructor() {

  }

  renderTableView(books) {
    const bookTable = document.querySelector('.book-management-table');

    const html = books.map(function(book) {
      return `
        <tr>
          <td>${book.isbn}</td>
          <td>${book.name}</td>
          <td><a>View Detail</a></td>
      `;
    });

    bookTable.innerHTML = bookTable.innerHTML + html.join('');
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
        hideElement('.book-management-add-new');
        this.displayBookList();
      }
    }
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
}