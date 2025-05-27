/* global cy */

describe('in cart from detail', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('process product in cart from product detail', () => {
    cy.contains('신발 상품 목록');

    cy.get('[data-testid="cart-count"]')
      .invoke('text')
      .then(Number)
      .as('before');

    cy.get('[data-testid="product-card"]').first().click();

    cy.url().should('include', '/product/1');

    cy.get('[data-testid="plus-button"]').click();

    cy.get('[data-testid="product-num"]')
      .should('have.text', '01');

    cy.get('[data-testid="detail-in-cart"]').click();

    cy.get('@before').then(before => {
      cy.get('[data-testid="cart-count"]')
        .invoke('text')
        .then(Number)
        .should('eq', before + 1);
    });

    cy.get('[data-testid="cart-icon"]').click();

    cy.url().should('include', '/cart');

    cy.contains('브랜드A');
  })
})