import {BorrowingModel} from './borrowing-returning-book.model.js'
import {BorrowingView} from './borrowing-returning-book.view.js'

export class BorrowingController {
  constructor(borrowingModel, borrowingnView) {
    this.borrowingModel = borrowingModel
    this.borrowingView = borrowingView
  }
}