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

    bookTable.innerHTML = bookTable.innerHTML + html.join();
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