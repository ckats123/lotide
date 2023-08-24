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
