const assert = require('chai').assert;
const {without} = require('../index');

describe("#without", () => {
  it("should return ['Lighthouse', 'Labs'] when (['Hello', 'Lighthouse', 'Labs'], ['Lighthouse']) is passed in", () => {
    assert.deepEqual(without(['Hello', 'Lighthouse', 'Labs'],['Hello']), ['Lighthouse', 'Labs']);
  });

});
