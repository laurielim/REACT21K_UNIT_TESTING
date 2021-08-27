"use strict";

const Dice = require("../dice");

describe("No upper bound given", () => {
	const dice = new Dice();
	test("Dot count is between 1 and 6", () => {
		expect(dice.minimumValue).toBe(1);
		expect(dice.maximumValue).toBe(6);
	});

	test("Minimum dot count is 6", () => {
		expect(dice.minimumValue).toBe(1);
	});

	test("Maximum dot count is 6", () => {
		expect(dice.maximumValue).toBe(6);
	});

	test("Dot count is zero", () => {
		expect(dice.dots).toBe(0);
	});
});

describe("Create a dice with given upper bound 2-20", () => {
	// Create an array with 19 elements and fill them all with 2s before mapping [ 2 + index ]
	const testCases = new Array(19).fill(2).map((value, ind) => [value + ind]);

	test.each(testCases)("Test upper bound %s", (upperBound) => {
		const dice = new Dice(upperBound);
		expect(dice.maximumValue).toBe(upperBound);
		expect(dice.minimumValue).toBe(1);
	});
});

describe("Test exceptions", () => {
	const testCases = [
		[0, "Upper bound too small"],
		[1, "Upper bound too small"],
		[-1, "Upper bound too small"],
		[21, "Upper bound too big"],
		["a", "Upper bound must be an integer"],
		[2.5, "Upper bound must be an integer"],
	];

	test.each(testCases)(
		"Upper bound %s throws an exception: %s",
		(upperBound, expected) => {
			expect(() => new Dice(upperBound)).toThrow(expected);
		}
	);
});

describe("Test rolling", () => {
	const dice = new Dice();

	test("Dot count is between 1 and 6 when dice is rolled", () => {
		dice.roll();
		expect(dice.dots).toBeGreaterThanOrEqual(1);
		expect(dice.dots).toBeLessThanOrEqual(6);
	});

	const testCases = new Array(19).fill(2).map((value, ind) => [value + ind]);

	test.each(testCases)(
		"Dot count is between 1 and %s when dice is rolled",
		(upperBound) => {
			const dice = new Dice(upperBound);
			dice.roll();
			expect(dice.dots).toBeGreaterThanOrEqual(1);
			expect(dice.dots).toBeLessThanOrEqual(upperBound);
		}
	);
});

describe("Test toString", () => {
	let dice;

	beforeEach(() => (dice = new Dice()));

	test("Dice is not rolled yet", () => {
		expected(dice.toString()).toBe("Not rolled yet");
	});

	test("Dice rolled", () => {
		expect(dice.toString().toBe(`${dice.dots}`));
	});
});

describe("methods and getters defined", () => {
	const dice = new Dice();

	test("minimumValue defined", () => {
		expect(dice.minimumValue).toBeDefined();
	});
	test("maximumValue defined", () => {
		expect(dice.maximumValue).toBeDefined();
	});
	test("dots defined", () => {
		expect(dice.dots).toBeDefined();
	});
	test("roll defined", () => {
		expect(dice.roll).toBeDefined();
	});
	test("toString defined", () => {
		// Always passes
		expect(dice.toString).toBeDefined();
	});
});
