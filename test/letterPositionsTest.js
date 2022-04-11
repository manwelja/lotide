const assert = require('chai').assert;
const {letterPositions} = require('../index');

describe("#letterPositions", () => {
  it("returns {'a': [0], 'b': [1, 3], 'c': [2], 'd': [4]}  when ('abcbd') is passed in", () => {
    assert.deepEqual(letterPositions('abcbd'), {'a': [0], 'b': [1, 3], 'c': [2], 'd': [4]});
  });

});


  