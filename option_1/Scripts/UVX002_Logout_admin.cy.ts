describe('logout admin', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login');
    cy.get('app-login.ng-star-inserted > :nth-child(3) > .ng-star-inserted').click()
    cy.url().should('include', 'http://localhost:4200/admin')
  });

  it('logout admin', () => {
    cy.get('[routerlink="/login"]').click()
    cy.get('app-login.ng-star-inserted > :nth-child(2)')
    .contains('Logged in')
    cy.get('app-login.ng-star-inserted > :nth-child(3) > .ng-star-inserted').click()
  });
});