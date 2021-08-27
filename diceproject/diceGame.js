"use strict";

const Dice = require("./dice");

const diceA = new Dice();
const diceB = new Dice();

console.log("diceA:", diceA.toString());
console.log("diceB: " + diceB);

diceA.roll();
diceB.roll();

console.log("diceA:", diceA.toString());
console.log("diceB: " + diceB);

if (diceA.dots === diceB.dots) {
	console.log("It's a draw");
} else if (diceA.dots > diceB.dots) {
	console.log("A wins");
} else {
	console.log("B wins");
}
