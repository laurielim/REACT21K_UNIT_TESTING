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
