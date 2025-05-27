/* global cy */

describe('pay', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('add product in cart and add card and pay', () => {
    cy.contains('신발 상품 목록');

    cy.contains('button', '담기').first().click();

    cy.contains('button', '담김!').should('exist');

    cy.get('[data-testid="cart-icon"]').click();

    cy.url().should('include', '/cart');

    cy.contains('브랜드A');

    cy.get('[data-testid="pay-button-incart"]').click();

    cy.contains('보유 카드');

    cy.get('[data-testid="add-card-button"]').click();

    cy.get('input[name="card-number"]').type('1234567890123456');
    cy.get('input[name="card-expiration-date"]').type('1234');
    cy.get('input[name="cardholder"]').type('lee');
    cy.get('input[name="card-security-code"]').type('123');
    cy.get('input[name="password1"]').type('1');
    cy.get('input[name="password2"]').type('2');

    cy.get('[data-testid="register-card-button"]').click();

    cy.contains('lee');

    cy.get('[data-testid="pay-button"]').click();

    cy.url().should('include', '/pay/completed');

    cy.contains('결제 완료!');

    cy.get('[data-testid="move-product-list"').click();

    cy.url().should('include', '/');

    cy.get('[data-testid="cart-count"]')
    .invoke('text')
    .then(Number)
    .should('eq', 0);
  })
})