"use strict";

const { sum, subtract, divide } = require("../calclibrary");

describe("Test sum function", () => {
	describe("Test sum with integers", () => {
		test("Test that 1 + 1 = 2", () => {
			expect(sum(1, 1)).toBe(2);
		});
		test("Test that 2 + 3 = 5", () => {
			expect(sum(2, 3)).toBe(5);
		});
	});

	describe("Test sum with integer using test.each", () => {
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

	describe("Test sum with floats using test.each", () => {
		const testValues = [
			// [a, b, expectedResult]
			[3, -2.5, 0.5],
			[-3, 2.5, -0.5],
			[-2.5, -3, -5.5],
			[-2.5, -2.5, -5.0],
			[2.5, -2.5, 0],
			[2.4, -2.5, -0.1],
		];

		test.each(testValues)("sum(%s, %s) = %s", (a, b, expectedResult) => {
			expect(sum(a, b)).toBeCloseTo(expectedResult);
		});
	});
});

describe("Test subtract function", () => {
	describe("Test subtract with integers", () => {
		const testValues = [
			// [a, b, expectedResult]
			[2, -4, 6],
			[0, 0, 0],
			[0, 3, -3],
			[3, 0, 3],
			[0, -3, 3],
			[-3, 0, -3],
		];

		// %s is a placeholder for a string
		test.each(testValues)("subtract(%s, %s) = %s", (a, b, expectedResult) => {
			expect(subtract(a, b)).toBe(expectedResult);
		});
	});

	describe("Test subtract with floats using test.each", () => {
		const testValues = [
			// [a, b, expectedResult]
			[3, -2.5, 5.5],
			[-3, 2.5, -5.5],
			[-2.5, -3, 0.5],
			[-2.5, -2.5, 0],
			[2.5, -2.5, 5.0],
			[2.4, 2.5, -0.1],
		];

		test.each(testValues)("subtract(%s, %s) = %s", (a, b, expectedResult) => {
			expect(subtract(a, b)).toBeCloseTo(expectedResult);
		});
	});
});

describe("Test exceptions", () => {
	describe("Test missing parameters throw an exception", () => {
		test('sum() throws an exception "parameter missing"', () =>
			expect(() => sum()).toThrow("parameter missing"));
		test('subtract() throws an exception "parameter missing"', () =>
			expect(() => subtract()).toThrow("parameter missing"));

		const testValues = [
			[null, "parameter missing"],
			[1, "parameter missing"],
			["a", "parameter missing"],
			["", "parameter missing"],
		];

		test.each(testValues)(
			"sum(%s) throws an exception: %s",
			(value, expected) => {
				expect(() => sum(value)).toThrow(expected);
			}
		);
		test.each(testValues)(
			"subtract(%s) throws an exception: %s",
			(value, expected) => {
				expect(() => subtract(value)).toThrow(expected);
			}
		);
	});

	describe("Test parameters are not numbers", () => {
		const testValues = [
			["a", 1, "only numbers allowed"],
			[1, "a", "only numbers allowed"],
			["a", "b", "only numbers allowed"],
			["", "", "only numbers allowed"],
			[null, 1, "parameter missing"],
			[undefined, 1, "parameter missing"],
		];

		test.each(testValues)("sum(%s, %s) throws %s", (a, b, expected) => {
			expect(() => sum(a, b)).toThrow(expected);
		});
		test.each(testValues)("subtract(%s, %s) throws %s", (a, b, expected) => {
			expect(() => subtract(a, b)).toThrow(expected);
		});
	});
});

// ################################
// partial test of divide
// ################################

describe("Testing division", () => {
	const testValues = [
		[0, 0, Number.NaN],
		[2, 0, Number.POSITIVE_INFINITY],
		[-2, 0, Number.NEGATIVE_INFINITY],
		[Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NaN],
	];

	test.each(testValues)("divide(%s, %s) return %s", (a, b, expected) => {
		expect(divide(a, b)).toBe(expected);
	});
});
