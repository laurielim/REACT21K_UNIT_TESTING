"use strict";

const PhoneRegister = require("../PhoneRegister");
const phones = require("../phones.json");

describe("constructor", () => {
  test("object created", () => {
    const phoneRegister = new PhoneRegister(phones);
    expect(phoneRegister.phoneRegister).toEqual(phones);
  });

  test("missing parameter throws an exception", () => {
    expect(() => new PhoneRegister()).toThrow("phone data missing");
  });
});

describe("Test getTypes", () => {
  test("use default jsonData", () => {
    const phoneRegister = new PhoneRegister(phones);
    expect(phoneRegister.getTypes().sort()).toEqual(
      ["home", "work", "mobile"].sort()
    );
  });

  test("persons have no numbers", () => {
    const testData = [
      {
        firstname: "Leila",
        lastname: "River",
        phones: [],
      },
      {
        firstname: "Matt",
        lastname: "River",
        phones: [],
      },
    ];
    const phoneRegister = new PhoneRegister(testData);
    expect(phoneRegister.getTypes()).toEqual([]);
  });

  test("no persons in phoneRegister", () => {
    const phoneRegister = new PhoneRegister([]);
    expect(phoneRegister.getTypes()).toEqual([]);
  });
});

describe("Test getNumbersByType", () => {
  const phoneRegister = new PhoneRegister(phones);

  test("get from default jsonData with parameters Matt, River, mobile", () => {
    expect(phoneRegister.getNumbersByType("Matt", "River", "mobile")).toEqual([
      78788877, 2348654,
    ]);
  });

  test("get from default jsonData with parameters John, Doe, mobile", () => {
    expect(phoneRegister.getNumbersByType("John", "Doe", "mobile")).toEqual([
      98765432,
    ]);
  });

  describe("wrong type or name", () => {
    const testValues = [
      // firstname, lastname, type, expected
      ["Matt", "River", "x", []],
      ["Matt", "x", "mobile", []],
      ["x", "River", "mobile", []],
    ];

    test.each(testValues)(
      'getNumbersByType("%s","%s","%s") returns %s',
      (firstname, lastname, type, expected) => {
        expect(
          phoneRegister.getNumbersByType(firstname, lastname, type)
        ).toEqual(expected);
      }
    );
  });

  describe("missing parameter throws and exception", () => {
    test("one parameter missing", () => {
      expect(() => phoneRegister.getNumbersByType("John", "Doe")).toThrow(
        "parameter missing"
      );
    });
    test("two parameter missing", () => {
      expect(() => phoneRegister.getNumbersByType("John")).toThrow(
        "parameter missing"
      );
    });
    test("all parameter missing", () => {
      expect(() => phoneRegister.getNumbersByType()).toThrow(
        "parameter missing"
      );
    });
  });
});

describe("Test getAllNumbersByType", () => {
  const phoneRegister = new PhoneRegister(phones);

  test("get all work numbers", () => {
    const expectedResult = [
      {
        firstname: "John",
        lastname: "Doe",
        number: { type: "work", tel: 11122233 },
      },
      {
        firstname: "Leila",
        lastname: "River",
        number: { type: "work", tel: 7425775 },
      },
    ];
    expect(phoneRegister.getAllNumbersByType("work")).toEqual(expectedResult);
  });

  test("get all mobile numbers", () => {
    const expectedResult = [
      {
        firstname: "John",
        lastname: "Doe",
        number: { type: "mobile", tel: 98765432 },
      },
      {
        firstname: "Matt",
        lastname: "River",
        number: { type: "mobile", tel: 78788877 },
      },
      {
        firstname: "Matt",
        lastname: "River",
        number: { type: "mobile", tel: 2348654 },
      },
      {
        firstname: "Leila",
        lastname: "River",
        number: { type: "mobile", tel: 2223453 },
      },
    ];
    expect(phoneRegister.getAllNumbersByType("mobile")).toEqual(expectedResult);
  });

  test("type 'x' will return an empty array", () => {
    expect(phoneRegister.getAllNumbersByType("x")).toEqual([]);
  });

  test("missing parameter throws an exception", () => {
    expect(() => phoneRegister.getAllNumbersByType()).toThrow(
      "parameter missing"
    );
  });
});

describe("Test getAllNumbers", () => {
  test("Default data", () => {
    const phoneRegister = new PhoneRegister(phones);
    expect(phoneRegister.getAllNumbers()).toEqual(phones);
  });

  test("Contacts have no number", () => {
    const testCases = [
      {
        firstname: "John",
        lastname: "Doe",
        phones: [],
      },
      {
        firstname: "Matt",
        lastname: "River",
        phones: [],
      },
      {
        firstname: "Leila",
        lastname: "River",
        phones: [],
      },
    ];
    const phoneRegister = new PhoneRegister(testCases);
    expect(phoneRegister.getAllNumbers()).toEqual([]);
  });

  /* test("Default data", () => {
    const phoneRegister = new PhoneRegister(phones);
  }); */

  test("All persons missing", () => {
    const phoneRegister = new PhoneRegister([]);
    expect(phoneRegister.getAllNumbers()).toEqual([]);
  });
});

describe("Test getName", () => {
  const phoneRegister = new PhoneRegister(phones);
  test("Get name of number `12345678`", () => {
    expect(phoneRegister.getName(12345678)).toEqual({
      firstname: "John",
      lastname: "Doe",
    });
  });

  describe("Get name of number from default data", () => {
    const testCases = [
      [11122233, { firstname: "John", lastname: "Doe" }],
      [78788877, { firstname: "Matt", lastname: "River" }],
      [25634544, { firstname: "Leila", lastname: "River" }],
    ];

    test.each(testCases)("number %s returns %s", (number, expectedValue) => {
      expect(phoneRegister.getName(number)).toEqual(expectedValue);
    });
  });

  test("Get name of wrong number", () => {
    expect(phoneRegister.getName(1234)).toEqual(null);
  });
});
