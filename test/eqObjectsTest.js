const {assert} = require('chai');
const {eqObjects} = require('../index');

describe("#eqObjects", () => {
  it("returns true when comparing two equal objects", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1"};
    assert.isTrue(eqObjects(ab, ba));
  });
  it("returns false when comparing two objects that are not equal", () => {
    const ab = { a: "2", b: "1" };
    const ba = { b: "2", a: "1" };
    assert.isFalse(eqObjects(ab, ba));
  });
  it("returns true when comparing two objects that contain arrays as values", () => {
    const ab = { a: "1", b: ["2", 3] };
    const ba = { b: ["2", 3], a: "1" };
    assert.isTrue(eqObjects(ab, ba));
  });

});