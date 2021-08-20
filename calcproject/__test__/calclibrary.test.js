"use strict";

const { sum } = require("../calclibrary");

describe("Test sum with integers", () => {
  test("Test that 1 + 1 = 2", () => {
    expect(sum(1, 1)).toBe(2);
  });
  test("Test that 2 + 3 = 5", () => {
    expect(sum(2, 3)).toBe(5);
  });
});

describe("Test sum with unteger using test.each", () => {
  const testValues = [
    // [a, b, expectedResult]
    [1, 1, 2],
    [2, 3, 5],
    [-2, -4, -6],
    [-2, 4, 2],
  ];

  // %s is a placeholder for a string
  test.each(testValues)("sum(%s, %s) = %s", (a, b, expectedResult) => {
    expect(sum(a, b)).toBe(expectedResult);
  });
});
