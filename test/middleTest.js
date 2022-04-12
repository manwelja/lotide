const {assert} = require('chai');
const {middle} = require('../index');

describe("#middle", () => {
  it("returns an empty array when an empty array is passed in", () => {
    assert.deepEqual(middle([]), []);
  });
  it("returns an empty array when an array with less than three element is passed in", () => {
    assert.deepEqual(middle(['1']), []);
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns the middle element when an array with an odd number of elements is passed in", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns the middle two elements when an array with an even number of elements is passed in", () => {
    assert.deepEqual(middle(['1', '2', '3', '4']), ['2', '3']);
  });
  
});