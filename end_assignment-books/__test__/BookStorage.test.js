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
    expect(bookStorage.getById(100)).toBe(null);
  });
  test("Throws exception if parameter is missing", () => {
    expect(() => bookStorage.getById()).toThrow("missing parameter");
  });
});

describe("Test getAllIdsByName", () => {
  const bookStorage = new BookStorage(data);
  describe("Get array of id where value match book name", () => {
    const testValues = [
      // value, expectedResult
      ["SQL", [1]],
      ["databases", [2, 3]],
      ["hacking", [3]],
    ];

    test.each(testValues)("Value '%s' returns %s", (value, expectedResult) => {
      expect(bookStorage.getAllIdsByName(value)).toEqual(expectedResult);
    });
  });

  test("Return null if there is no match", () => {
    expect(bookStorage.getAllIdsByName("javascript")).toBe(null);
  });

  test("Return null if parameter is missing", () => {
    expect(bookStorage.getAllIdsByName()).toBe(null);
  });
});

describe("Test getAllBookAuthors", () => {
  test("Returns array of author names from default jsonData", () => {
    const bookStorage = new BookStorage(data);
    expect(bookStorage.getAllBookAuthors()).toEqual([
      "Layla Jones",
      "Antony Lee",
      "Emily White",
    ]);
  });

  test("Returns an empty array if no authors found", () => {
    const bookStorage = new BookStorage([
      {
        id: 1,
        name: "NoSql - New Hope",
        author: "",
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
      },
    ]);

    expect(bookStorage.getAllBookAuthors()).toEqual([]);
  });

  test("Author is added to the result array only once", () => {
    const bookStorage = new BookStorage([
      {
        id: 1,
        name: "NoSql - New Hope",
        author: "Antony Lee",
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
      },
      {
        id: 2,
        name: "Databases - The rise and fall",
        author: "Antony Lee",
        topics: ["data storages", "sql", "noSql"],
        price: 45,
        extras: [
          {
            name: "signed by author",
            price: 80,
          },
          {
            name: "dvd",
            price: 65,
          },
        ],
      },
    ]);

    expect(bookStorage.getAllBookAuthors()).toEqual(["Antony Lee"]);
  });

  test("No book in BookStorage", () => {
    const bookStorage = new BookStorage([]);
    expect(bookStorage.getAllBookAuthors()).toEqual([]);
  });
});

describe("Test getAllBooksByAuthor", () => {
  const bookStorage = new BookStorage(data);
  test("Returns an array of book object", () => {
    expect(bookStorage.getAllBooksByAuthor("Layla Jones")).toEqual([
      {
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
      },
    ]);
  });

  test("Returns an empty array if not book found", () => {
    expect(bookStorage.getAllBooksByAuthor("JK Rowling")).toEqual([]);
  });

  test("Throws exception for missing parameter", () => {
    expect(() => bookStorage.getAllBooksByAuthor()).toThrow(
      "missing parameter"
    );
  });
});

describe("Test hasTopics", () => {
  const bookStorage = new BookStorage(data);
  describe("Returns true if the book has topics, otherwise returns false", () => {
    const testValues = [
      // value, expectedResult
      [1, true],
      [2, true],
      [3, false],
    ];

    test.each(testValues)(
      "Book %s returns Boolean %s",
      (value, expectedResult) => {
        expect(bookStorage.hasTopics(value)).toBe(expectedResult);
      }
    );
  });

  test("Returns false if parameter is missing", () => {
    expect(bookStorage.hasTopics()).toBe(false);
  });
});

describe("Test getBookTopics", () => {
  const bookStorage = new BookStorage(data);
  describe("Returns array of book topics if topics found, otherwise returns an empty array", () => {
    const testValues = [
      // value, expectedResult
      [1, ["noSql", "sql", "future databases"]],
      [2, ["data storages", "sql", "noSql"]],
      [3, []],
    ];

    test.each(testValues)("Book %s returns %s", (value, expectedResult) => {
      expect(bookStorage.getBookTopics(value)).toEqual(expectedResult);
    });
  });

  test("Returns empty array if parameter is missing", () => {
    expect(bookStorage.getBookTopics()).toEqual([]);
  });

  test("Returns empty array if id does not match", () => {
    expect(bookStorage.getBookTopics(1000)).toEqual([]);
  });
});

describe("Test getPriceWithoutExtras", () => {
  const bookStorage = new BookStorage(data);
  describe("Returns price of book without extras", () => {
    const testValues = [
      // value, expectedResult
      [1, 25],
      [2, 45],
      [3, 30],
    ];

    test.each(testValues)("Book %s returns %s", (value, expectedResult) => {
      expect(bookStorage.getPriceWithoutExtras(value)).toEqual(expectedResult);
    });
  });

  test("Throws exception if no book with matching id found", () => {
    expect(() => bookStorage.getPriceWithoutExtras(5)).toThrow(
      "nothing found with given id"
    );
  });

  test("Throws exception for missing parameter", () => {
    expect(() => bookStorage.getPriceWithoutExtras()).toThrow(
      "missing parameter"
    );
  });
});

describe("Test getTotalPrice", () => {
  const bookStorage = new BookStorage(data);
  describe("Returns the total price of the book including extras", () => {
    const testValues = [
      // value, expectedResult
      [1, 70],
      [2, 190],
      [3, 30],
    ];

    test.each(testValues)("Book %s returns %s", (value, expectedResult) => {
      expect(bookStorage.getTotalPrice(value)).toEqual(expectedResult);
    });
  });

  test("Throws exception if no book with matching id found", () => {
    expect(() => bookStorage.getTotalPrice(5)).toThrow(
      "nothing found with given id"
    );
  });

  test("Throws exception for missing parameter", () => {
    expect(() => bookStorage.getTotalPrice()).toThrow("missing parameter");
  });
});

describe("Test getPriceOfTheExtras", () => {
  const bookStorage = new BookStorage(data);
  describe("Returns the total price of extras. If no extras is found returns 0", () => {
    const testValues = [
      // value, expectedResult
      [1, 45],
      [2, 145],
      [3, 0],
    ];

    test.each(testValues)("Book %s returns %s", (value, expectedResult) => {
      expect(bookStorage.getPriceOfTheExtras(value)).toEqual(expectedResult);
    });
  });

  test("Throws exception if no book with matching id found", () => {
    expect(() => bookStorage.getPriceOfTheExtras(5)).toThrow(
      "nothing found with given id"
    );
  });

  test("Throws exception for missing parameter", () => {
    expect(() => bookStorage.getPriceOfTheExtras()).toThrow(
      "missing parameter"
    );
  });
});
