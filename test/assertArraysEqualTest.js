// test/assertArraysEqual.js
const assertArraysEqual = require("../assertArraysEqual");

// Test Case for assertArraysEqual.js
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should FAIL
