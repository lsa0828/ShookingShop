/* global cy */

describe('in cart from list', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('process product in cart from product list', () => {
    cy.contains('신발 상품 목록');

    cy.get('[data-testid="cart-count"]')
    .invoke('text')
    .then(Number)
    .as('before');

    cy.contains('button', '담기').first().click();

    cy.contains('button', '담김!').should('exist');

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