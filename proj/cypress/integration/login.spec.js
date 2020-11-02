/* eslint-disable no-undef */
/// < reference types=cypress />

describe("Login", () => {
  before(() => {}); // executa o before antes de todos os testes it

  it("Login", () => {
    cy.visit("https://mentores.obmep.org.br/site/login");
    cy.get("#loginform-username").type("407365488823{backspace}", {
      delay: 100,
    });
    cy.get("#loginform-password").type("@Shynobi999");
    cy.get(".btn").click();
  });
});
