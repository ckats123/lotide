const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected + "✅✅✅");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + "!== " + expected + "🛑🛑🛑");
  }
};
  
// TEST CODE: write a function that returns the tail of an array
// Your function should not modify the array that is passed in. It should return a new array.

const tail = function(array) {
  return array.slice(1);
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!