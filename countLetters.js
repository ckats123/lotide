const assertEqual = require("./assertEqual");

/*
The function should take in a sentence (as a string) and
then return a count of each of the letters in that sentence.

For example, countLetters('LHL') should return results indicating
that L appears twice, and H once.
*/

const countLetters = function (sentence) {
  let count = {};
  for (let letter of sentence) {
    if (letter !== " ") {
      if (count[letter]) {
        count[letter] += 1;
      } else {
        count[letter] = 1;
      }
    }
  }
  return count;
};

console.log(countLetters("assignment for lighthouse labs"));
console.log(countLetters("hello world"));
