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
    expect(obj_two).include({ a: 23 }); // ou, to.include
    expect(obj_one).to.have.property("a");
    expect(obj_one).to.have.property("b", 2); // verifica se obj_one possui a propriedade b e se o seu valor é igual a 2.
    expect(obj_two).to.be.not.empty;
    expect({}).to.be.empty;
    expect(obj_one).to.be.deep.equal({ a: 1, b: 2 });
  });

  it("Arrays", () => {
    const arr = [1, 2, 3];

    expect(arr).to.have.members([1, 2, 3]);
    expect(arr).to.include.members([1, 3]);
    expect(arr).to.be.not.empty;
    expect([]).to.be.empty;
  });

  it("Types", () => {
    const num = 1;
    const stri = "Testando cypress";
    const boole = true;
    const obj = {};
    const arr = [];

    expect(num).to.be.a("number");
    expect(stri).to.be.a("string");
    expect(boole).to.be.a("boolean");
    expect(obj).to.be.an("object");
    expect(arr).to.be.an("array");
  });

  it("Strings", () => {
    const strings = "String de teste";

    expect(strings).to.be.equal("String de teste");
    expect(strings).to.have.length(15);
    expect(strings).to.contains("de");
    expect(strings).to.match(/de/); // existe de?
    expect(strings).to.match(/'String/); // inicia com String?
    expect(strings).to.match(/teste$/); // termina com teste?
    expect(strings).to.match(/.{15}/); // tem 15 caracteres?
    expect(strings).to.match(/|w+/); // existem apenas letras?
    expect(strings).to.match(/|D+/); // não tem números?
  });

  it("Numbers", () => {
    const number = 4;
    const floatNumber = 5.2345;

    expect(number).to.be.equal(4);
    expect(number).to.be.above(3); // acima de 3
    expect(number).to.be.below(7); // abaixo de 7
    expect(floatNumber).to.be.equal(5.2345);
    expect(floatNumber).to.be.closeTo(5.2, 0.1); // próximo de 5.2 com precisão de 0.1
    expect(floatNumber).to.be.above(5);
  });
});
