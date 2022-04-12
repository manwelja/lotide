const {assert} = require('chai');
const {flatten} = require('../index');

describe("#flatten", () => {
  it("returns a flat array when passed a nested array", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
    assert.deepEqual(flatten(['a', 'b', ['c', 'd'], 'e', ['fghi']]), [ 'a', 'b', 'c', 'd', 'e', 'fghi' ]);
  });
});