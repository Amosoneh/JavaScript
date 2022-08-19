const assert = chai.assert;
const expect = chai.expect;

mocha.setup("bdd");
describe("Sum function test", function () {
  it("sum(2, 2) should be 4", () => {
    expect(sum(2, 2)).to.equals(4);
  });
  it("sum(2, 2) should be 4", () => {
    assert.equal(2 + 2, 4);
  });
});

describe("Sum function test", function () {
  it("2 + 2 should be 4", () => {
    expect(2 + 2).to.equals(4);
  });
  it("2 + 2 should be 4", () => {
    expect(1 + 1).equals(2);
  });
});

mocha.run();
