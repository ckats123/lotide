/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
  }
};
s
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
  
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

/*
The function should take in a sentence (as a string) and
then return a count of each of the letters in that sentence.

For example, countLetters('LHL') should return results indicating
that L appears twice, and H once.
*/

const countLetters = function(sentence) {
  let count = {};
  for (let letter of sentence) {
    if (letter !== " ") {
      if (count[letter]) {
        count[letter] += 1;
      } else {
        count[letter] = 1;
      }
    }
  } return count;
};

console.log(countLetters("assignment for lighthouse labs"));
console.log(countLetters("hello world"));
