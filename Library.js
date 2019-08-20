class Library {
  constructor() {
    this.books = [];
    this.patrons = [];
    this.dailyFine = 0.10;
  }

  addBook(book) {
    this.books.push(book);
  }

  addPatron(patron) {
    this.patrons.push(patron);
  }

  chargeFines() {
    const now = new Date();

    const latePatrons = this.patrons.filter(patron =>
      (patron.currentBook !== null && now > patron.currentBook.dueDate)
    )

    for (let patron of latePatrons) {
      const dateDiff = new Date(now - patron.currentBook.dueDate);
      const daysLate = dateDiff.getDate();
      patron.balance += daysLate * this.dailyFine;
    }
  };
}