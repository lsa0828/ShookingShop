/* global cy */

describe('shooking-shop', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('product list page', () => {
    cy.contains('브랜드A');
  })
})