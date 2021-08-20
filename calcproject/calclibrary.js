"use strict";

// Quick test but not best practice:
// exports.sum = (a, b) => a + b;

function sum(a, b) {
	if (a == undefined || b == undefined) throw new Error("parameter missing");
	if (typeof a !== "number" || typeof b !== "number")
		throw new Error("only numbers allowed");

	return a + b;
}

function subtract(a, b) {
	if (a == undefined || b == undefined) throw new Error("parameter missing");
	if (typeof a !== "number" || typeof b !== "number")
		throw new Error("only numbers allowed");

	return a - b;
}

// partial implementation - error handling missing
function divide(a, b) {
	return a / b;
}

// export object with name of functions to be exported instead of individually exporting each function
module.exports = { sum, subtract, divide };
