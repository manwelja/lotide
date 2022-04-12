const assert = require('chai').assert;
const {without} = require('../index');

describe("#without", () => {
  it("returns an array with the specified items removed", () => {
    assert.deepEqual(without(['Hello', 'Lighthouse', 'Labs'],['Hello']), ['Lighthouse', 'Labs']);
  });
});
