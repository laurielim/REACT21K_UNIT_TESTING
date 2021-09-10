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

  getAllIdsByName(value) {
    if (!value) return null;
    let result = [];
    this.books.forEach((book) => {
      if (book.name.toLowerCase().includes(value.toLowerCase())) {
        result.push(book.id);
      }
    });
    return result.length ? result : null;
  }

  getAllBookAuthors() {
    let result = [];
    this.books.forEach((book) => {
      if (book.author && !result.includes(book.author))
        result.push(book.author);
    });
    return result;
  }
};
