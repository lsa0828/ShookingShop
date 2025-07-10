/* global cy */

describe('shooking-shop', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('product list page', () => {
    cy.contains('브랜드A');
  })
})