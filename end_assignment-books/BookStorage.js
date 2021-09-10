"use strict";

module.exports = class BookStorage {
  constructor(data) {
    if (!data) throw new Error("data storage missing");
    this.books = data;
  }

  getById(id) {
    if (!id) throw new Error("parameter missing");
    const find = this.books.find((book) => book.id === id);
    return find ? find : null;
  }
};
