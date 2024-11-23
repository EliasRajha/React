/// <reference types="cypress" />

describe("Navigation", () => {
  it("Can go to the details page and back", () => {
    // Visit the URL you want to test
    cy.visit("https://hyf-react-w2-example.netlify.app/");

    // Check that there are 20 products in the product list
    cy.get('[data-testid="product-link"]').should("have.length", 20);

    // Click on the first product link
    cy.get('[data-testid="product-link"]').first().click();

    // Check that the product details page is visible
    cy.get('[data-testid="product-details-page"]').should("be.visible");

    // Simulate going back to the products page
    cy.go("back");

    // Verify that the products page is visible again
    cy.get('[data-testid="products-page"]').should("be.visible");
  });
});