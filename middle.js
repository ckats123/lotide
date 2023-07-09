/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
  }
};
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected + "✅✅✅");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + "!== " + expected + "🛑🛑🛑");
  }
};
  
/*
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
*/

/* Implement a function eqArrays which takes in two arrays and
returns true or false, based on a perfect match. */

const eqArrays = function(array1, array2) {
  let result = true;
  if (array1.length !== array2.length) {
    result = false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      //console.log(array1[i], array2[i]);
      if (array1[i] !== array2[i]) {
        result = false;
      }
    }
  }
  return result;
};

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

/* Instruction:
Use assertEqual to write test cases for various scenarios.

The tests can be written below the definition of your function.
Here's one example to get you started:

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS */

/* Implement assertArraysEqual which will take in two arrays and
console.log an appropriate message to the console.

The message will be similar to that of assertEqual.
In fact, you could refer to the code for assertEqual to help you implement
this. Instead of doing a simple === check though, this assertion function
will make use of your eqArrays function for array comparison.

Warning
Functions that do not return values and instead print out messages to the
console are more difficult to test using assertions. This is because we
cannot simply compare their return value to an expected value.

For this reason, we will not be writing assertions (test code)
for assertArraysEqual. That said, you can and should call the function
 below its declaration and visually ensure that the message printed
 to the console is accurate. */

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅✅✅ Assertion Passed: " + array1 + " === " + array2 + "✅✅✅");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + array1 + "!== " + array2 + "🛑🛑🛑");
  }
};

/*Implement middle which will take in an array and return the middle-most element(s)
of the given array.

The middle function should return an array with only the middle element(s) of the
provided array. This means that the length of the returned elements could vary.

For arrays with one or two elements, there is no middle. Return an empty array:
middle([1]) // => []
middle([1, 2]) // => []

For arrays with odd number of elements, an array containing a single middle element
should be returned:
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

For arrays with an even number of elements, an array containing the two elements in
the middle should be returned:
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
*/

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[(array.length / 2) - 1], array[(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};

// TEST CODE
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]