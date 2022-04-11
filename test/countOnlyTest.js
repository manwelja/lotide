const assert = require('chai').assert;
const {countOnly} = require('../index');

describe("#countOnly", () => {
  it("returns { 'a': 1, 'c': 3, 'd': 1 } when (['a', 'b', 'c', 'd', 'c', 'c', 'e'], {'a': true, 'b': false, 'c': true, 'd': true}) is passed in", () => {
    assert.deepEqual(countOnly(['a', 'b', 'c', 'd', 'c', 'c', 'e'], {'a': true, 'b': false, 'c': true, 'd': true }), {'a': 1, 'c': 3, 'd': 1 });
  });
});

