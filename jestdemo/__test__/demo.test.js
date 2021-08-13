"use strict";

// functions used come from the jest library and so the files need to be run with jest

/* beforeAll(() => {
	console.log("init before all tests");
});

afterAll(() => {
	console.log("cleaning after all tests");
});

test("This is the first test", () => {
	console.log("first test");
});

// "it" is an alias for "test" in jest
 it("This is the first test", () => {
	console.log("second test");
});

// Use "describe" to group tests
describe("This is test suite A", () => {
	beforeEach(() => {
		console.log("doSomething before each test in suite A");
	});

	afterEach(() => {
		console.log("clean after each test in suite A");
	});

	test("first test in suite A", () => {
		console.log("first test in suite A");
	});

	test("second test in suite A", () => {
		console.log("second test in suite A");
	});
});

describe("This is test suite B", () => {
	beforeAll(() => {
		console.log("doSomething before all subsuite test");
	});
	// You can also create sub suite if more structure is required
	describe("This is a subsuite of suiteB", () => {
		test("This is the subsuite test", () => {
			console.log("This is the subsuite test");
		});
	});
}); */

describe("test concatenating strings", () => {
	// Usually the functions to be test will be in it's own file, the following is for the sake of illustration
	const concat = (partA, partB) => partA + partB;

	test("first and second results firstsecond", () => {
		expect(concat("first", "second")).toBe("firstsecond");
	});
});

describe("this tests for an exceptiom", () => {
	function testFunction() {
		throw Error("This is an exception");
	}

	test("test if a function throws an exception", () => {
		expect(() => testFunction()).toThrow("This is an exception");
	});
});
