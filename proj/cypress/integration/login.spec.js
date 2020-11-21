/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Login", () => {
  before(() => {}); // executa o before antes de todos os testes it

  it("Login successful", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#name").type("batatat{backspace}", {
      delay: 100,
    });
    cy.get("#password").type("batatinha");
    cy.get("#button").click();
    cy.get("#title").then(($result) => {
      console.log($result);
      cy.wrap($result[0].firstChild.data).should("be.equal", "Sandbox Testing");
    });
    const obj = { name: "Qualquer", age: "0" };
    cy.wrap(obj).then((object) => {
      // expect(object.name).to.be.equal("Qualquer");
      cy.wrap(object.name).should("be.equal", "Qualquer");
      console.log("Cheguei!!! Wrap e then", object);
    });
  });
});
