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
Here's one example to get you started:*/

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS