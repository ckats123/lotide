const assertEqual = require("./assertEqual");

const tail = function (array) {
  let newArray = [];
  if (array.length === 0) {
    return undefined;
  } else if (array.length === 1) {
    return array;
  } else {
    return array.slice(1);
  }
  return newArray;
};

module.exports = tail;
