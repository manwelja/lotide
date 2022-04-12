const {assert} = require('chai');
const {letterPositions} = require('../index');

describe("#letterPositions", () => {
  it("returns the correct index of each character of a string", () => {
    assert.deepEqual(letterPositions('abcbd'), {'a': [0], 'b': [1, 3], 'c': [2], 'd': [4]});
  });

});


  