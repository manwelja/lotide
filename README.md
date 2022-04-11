# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @manwelj/lotide`

**Require it:**

`const _ = require('@manwelj/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element of the passed in array
* `tail(array)`: returns the last element of the passed in array
* `middle(array)`: returns the middle element(s) of the passed in array
* `flatten(array)`: returns a flat array when passed in an array of arrays
* `countOnly([allItems], {itemsToCount})`: takes in a collection of items and return counts for a specific subset of those items as an object
* `letterPositions(sentence)`: return all the indices (zero-based positions) in the string where each character is found
* `findKeyByValue(string)`: searches for a key on an object where its value matches a given value, returns the key name
* `eqObjects(object1, object2)`: compares two objects for equality, returns true or false
* `eqArrays(array1, array2)`: compares two arrays for equality, returns true or false
