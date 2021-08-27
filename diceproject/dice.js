"use strict";

module.exports = class Dice {
	constructor(upperBound = 6) {
		this.upperBound = upperBound;
		this.dotCount = 0;
	}

	get dots() {
		return this.dotCount;
	}

	get maximumValue() {
		return this.upperBound;
	}

	get minimumValue() {
		return 1;
	}
};
