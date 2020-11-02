/* eslint-disable no-undef */
/// < reference types=cypress />

describe("Work with basic elements", () => {
  it("Links", () => {
    cy.visit("https://mentores.obmep.org.br/site/login");
    cy.reload(); // refresh
  });
});
