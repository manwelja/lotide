const {assert} = require('chai');
const {tail} = require('../index');

describe("#tail", () => {
  it("returns an array containing all but the first element of an array that is passed in", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns an empty array if an array with less than two elements is passed in", () => {
    assert.deepEqual(tail(['5']), []);
    assert.deepEqual(tail(['']), []);
  });
});