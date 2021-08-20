"use strict";

// Quick test but not best practice:
// exports.sum = (a, b) => a + b;

function sum(a, b) {
  return a + b;
}

// export object with name of functions to be exported instead of individually exporting each function
module.exports = { sum };
