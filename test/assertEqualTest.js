// test/assertEqualTest.js
const assertEqual = require("../assertEqual");

// TEST CODE for assertEqual.js
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// test/headTest.js
const head = require("../head");

// TEST CODE for head.js
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// test/tailTest.js
const tail = require("../tail");

// Test Case of tail.js: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 1 of tail.js: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2 of tail.js: ...
const result1 = tail(["Hi"]);
assertEqual(result1[0], "Hi"); //ensure empty array is returned

// test.eqArrays.js
const eqArrays = require("../eqArrays");

// Test Code for eqArrays.js
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

// Test Cases for eqArrays.js
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS
