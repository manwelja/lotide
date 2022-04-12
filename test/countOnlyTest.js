const {assert} = require('chai');
const {countOnly} = require('../index');

describe("#countOnly", () => {
  it("returns an object that contains counts for only the specified characters", () => {
    assert.deepEqual(countOnly(['a', 'b', 'c', 'd', 'c', 'c', 'e'], {'a': true, 'b': false, 'c': true, 'd': true }), {'a': 1, 'c': 3, 'd': 1 });
  });
});

