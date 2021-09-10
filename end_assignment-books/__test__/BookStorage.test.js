"use strict";

const BookStorage = require("../BookStorage");
const data = require("../datastorage.json");

describe("Constructor", () => {
  test("Object created", () => {
    const bookStorage = new BookStorage(data);
    expect(bookStorage.books).toEqual(data);
  });

  test("Missing parameter throws an exception", () => {
    expect(() => new BookStorage()).toThrow("data storage missing");
  });
});

describe("Test getById", () => {
  const bookStorage = new BookStorage(data);
  test("Returns book object with matching id", () => {
    expect(bookStorage.getById(1)).toEqual({
      id: 1,
      name: "NoSql - New Hope",
      author: "Layla Jones",
      topics: ["noSql", "sql", "future databases"],
      price: 25,
      extras: [
        {
          name: "hard cover",
          price: 30,
        },
        {
          name: "cd",
          price: 15,
        },
      ],
    });
  });

  test("Returns null when no id match", () => {
    expect(bookStorage.getById(100)).toEqual(null);
  });
  test("Throws exception if parameter is missing", () => {
    expect(() => bookStorage.getById()).toThrow("parameter missing");
  });
});
