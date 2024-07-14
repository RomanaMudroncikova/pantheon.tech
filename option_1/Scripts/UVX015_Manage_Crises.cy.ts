describe('manage crises should contains text', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login');
    cy.get('app-login.ng-star-inserted > :nth-child(3) > .ng-star-inserted').click();
    cy.url().should('include', 'http://localhost:4200/admin');
  })

    it('display correct text', () => {
      cy.get('[routerlink="./crises"]').click()
      cy.get('p').should('have.text', ('Manage your crises here'))
    });
  });