// The function will return a "slice of the array with elements taken from the
// beginning." It should keep going until the callback/predicate returns a truthy
// value.

// To keep things simple, the callback should only be provided one value: The item
// in the array.

// Instruction
// Implement takeUntil which will keep collecting items from a provided array
// until the callback provided returns a truthy value.

const takeUntil = function (array, callback) {
  let result = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      result.push(item);
    }
  }
  return result;
};

// Expected Input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

/* Expected Output
[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/


// ToDo Later

Testing
Don't forget to test the function!

Instruction
Bring in our assertArraysEqual function (and associated eqArrays function) in order write some easy-to-read test cases.

Since takeUntil returns arrays, the best assertion function to use would be assertArraysEqual to compare its return value against an expected array.

Tips
Question
Does your takeUntil function need to loop through the entire array once the callback returns a truthy value? If not, how can we make it stop?

Complete Assignment
With the function implemented and satisfactory tests in place, we can push our work and mark this activity as completed.

Instruction
Commit and push the new file within your Lotide git repository.