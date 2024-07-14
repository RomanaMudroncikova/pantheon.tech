describe('unsuccessfully rename Sky Rains Great White Sharks', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login');
    cy.get('app-login.ng-star-inserted > :nth-child(3) > .ng-star-inserted').click()
    cy.url().should('include', 'http://localhost:4200/admin');
  }); 

  it('name stay Sky Rains Great White Sharks', () => {
    cy.get('[routerlink="/crisis-center"]').click()
    cy.get('.crises > :nth-child(2) > a').click()
    cy.get('#crisis-name')
      .clear()
      .type('Sky Rains Great White Sharks_1')
    cy.get('app-crisis-detail.ng-star-inserted > .ng-star-inserted > div > :nth-child(2)').click()
    cy.get('.crises > :nth-child(2) > a').contains('Sky Rains Great White Sharks')
  }); 
}); 