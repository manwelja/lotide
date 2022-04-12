const {assert} = require('chai');
const {eqArrays} = require('../index');

describe("#eqArrays", () => {
  it("returns true when comparing two equal flat arrays", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("returns false when comparing two arrays that are not identical (values and/or type)", () => {
    assert.isFalse(eqArrays(['1', '2', '3'], ['3', '2', '1']));
    assert.isFalse(eqArrays(['1', '2', '3'], [1, 2, 3]));
  });
});