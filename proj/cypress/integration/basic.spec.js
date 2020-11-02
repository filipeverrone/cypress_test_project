/* eslint-disable no-undef */
/// < reference types=cypress />

describe("Cypress básico", () => {
  before(() => {
    cy.visit("https://mentores.obmep.org.br/site/login");
  }); // executa o before antes de todos os testes it

  beforeEach(() => {
    cy.reload();
  }); // executa o beforeEach antes de cada teste it

  it("Should visit a page and assert title", () => {
    // cy.pause() // para executar passo a pasos no browser
    cy.title().should("be.equal", "Login").debug();
    cy.title().debug().should("contain", "Log");
  });

  it("Should find and interact with an element", () => {
    cy.get(".btn").click();
    cy.get("#loginform-username");
  });
});
