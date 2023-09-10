const assertEqual = require("./assertEqual");

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

module.exports = countLetters;
