"use strict";

module.exports = class BookStorage {
  constructor(data) {
    if (!data) throw new Error("data storage missing");
    this.books = data;
  }

  getById(id) {
    if (!id) throw new Error("missing parameter");
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

  getAllBooksByAuthor(author) {
    if (!author) throw new Error("missing parameter");

    let result = [];
    this.books.forEach((book) => {
      if (book.author === author) result.push(book);
    });
    return result;
  }

  hasTopics(id) {
    if (!id) return false;
    const topic = this.books
      .filter((book) => book.id === id)
      .map((book) => book.topics?.length);
    return Boolean(topic[0]);
  }

  getBookTopics(id) {
    if (!id) return [];
    for (let book of this.books) {
      if (book.id === id && "topics" in book) return book.topics;
    }
    return [];
  }

  getPriceWithoutExtras(id) {
    if (!id) throw new Error("missing parameter");
    for (let book of this.books) {
      if (book.id === id) return book.price;
    }
    throw new Error("nothing found with given id");
  }

  getTotalPrice(id) {
    if (!id) throw new Error("missing parameter");
    for (let book of this.books) {
      if (book.id === id) {
        let sum = book.price;
        if ("extras" in book) {
          book.extras.forEach((extra) => (sum += extra.price));
        }
        return sum;
      }
    }
    throw new Error("nothing found with given id");
  }

  getPriceOfTheExtras(id) {
    if (!id) throw new Error("missing parameter");
    for (let book of this.books) {
      if (book.id === id) {
        let sum = 0;
        if ("extras" in book) {
          book.extras.forEach((extra) => (sum += extra.price));
        }
        return sum;
      }
    }
    throw new Error("nothing found with given id");
  }
};
