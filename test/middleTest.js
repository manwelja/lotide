const assertArraysEqual = require('../assertArraysEqual.js');
const middle = require('../middle.js');

assertArraysEqual(middle([]),[], true);
assertArraysEqual(middle([1]),[], true);
assertArraysEqual(middle([1, 2]), [], true);
assertArraysEqual(middle([1, 2, 3]), [2], true);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3], true);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3], true);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4], true);