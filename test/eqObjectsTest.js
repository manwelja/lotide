
const assert = require('chai').assert;
const {eqObjects} = require('../index');

describe("#eqObjects", () => {
  it("returns true when comparing { a: '1', b: '2' } and { b: '2', a: '1'}", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1"};
    assert.isTrue(eqObjects(ab, ba));
  });
  it("returns false when comparing { a: '2', b: '1' } and { b: '2', a: '1'}", () => {
    const ab = { a: "2", b: "1" };
    const ba = { b: "2", a: "1" };
    assert.isFalse(eqObjects(ab, ba));
  });
  it("returns true when comparing { a: '1', b: ['2',3] } and { b: ['2', 3], a: '1'}", () => {
    const ab = { a: "1", b: ["2", 3] };
    const ba = { b: ["2", 3], a: "1" };
    assert.isTrue(eqObjects(ab, ba));
  });

});