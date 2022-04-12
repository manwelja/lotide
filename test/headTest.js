const {assert} = require('chai');
const {head} = require('../index');

describe("#head", () => {
  it("returns the first element of a non-empty array", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
    assert.strictEqual(head(['5']), '5');
  });
});