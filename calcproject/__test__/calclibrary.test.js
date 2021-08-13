"use strict";

const library = require("../calclibrary");

describe("Test sum with integers", () => {
	test("Test that 1 + 1 = 2", () => {
		expect(library.sum(1, 1)).toBe(2);
	});
});
