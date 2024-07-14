describe('redirect to sidekicks page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login');
    cy.get('app-login.ng-star-inserted > :nth-child(3) > .ng-star-inserted').click();
    cy.url().should('include', 'http://localhost:4200/admin');
  }); 

  it('should not be found', () => {
    cy.get('[routerlink="/superheroes"]').click()
    cy.get('button').click()
    cy.get('h2').contains('Page not found')
    }); 
  }); 