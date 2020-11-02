/* eslint-disable no-unused-expressions */
/// < reference types=cypress />

describe("Variables", () => {
  it("The same variables", () => {
    const a = 12;
    const b = null;
    const c = true;
    const d = "testeD";
    let e;

    expect(a).equal(12);
    expect(a).to.be.not.null;
    expect(b).to.be.null;
    expect(c).to.be.true;
    expect(d).equal("testeD");
    expect(e).to.be.undefined;
  });

  it("Objects", () => {
    const obj_one = {
      a: 1,
      b: 2,
    };
    const obj_two = {
      a: 23,
      b: 34,
    };

    expect(obj_one).eql({ a: 1, b: 2 });
    expect(obj_two).not.eql({ a: 1, b: 2 });
    expect(obj_two).include({ a: 23 });
  });
});
