# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @ckats.123/lotide`

**Require it:**

`const _ = require('@ckats.123/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- Assert Equal: Compares two values and returns true if they're equal, false otherwise.

- head(array): Returns the first element of an array.

- tail(array): Returns all elements of an array except the first one.

- eqArrays(array1, array2): Compares two arrays and returns true if they're equal, false otherwise.

- assertArraysEqual(array1, array2): Prints a message after comparing two arrays.

- without(source, itemsToRemove): Removes specified items from a source array, returning a new array.

- flatten(actual, expected): Returns a flattened version of an array that might include nested arrays.

- middle(array): Returns the middle element of an array.

- countOnly(allItems, itemsToCount): Counts specific items in a collection.

- countLetters(sentence): Counts occurrences of letters in a sentence.

- letterPositions(sentence) : Returns indices of letter positions in a string.

- findKeyByValue(object, value): Returns the first key corresponding to a given value in an object.

- eqObjects(object1, object2): Compares two objects and returns true if they're equal, false otherwise.

- assertObjectsEqual(actual, expected): Checks if two objects are equal and prints a message.

- map(array, callback): Creates a new array by applying a callback to each item in an array.

- takeUntil(data1, (x) => x < 0): Returns a slice of an array based on a callback condition.

- findKey(object, callback) : Returns the first key in an object based on a callback condition.
