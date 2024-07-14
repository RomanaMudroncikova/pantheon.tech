describe('check if list is correctly named', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login')
    cy.get('app-login.ng-star-inserted > :nth-child(3) > .ng-star-inserted').click()
    cy.url().should('include', 'http://localhost:4200/admin');
  }); 
  
  it('contains correct text', () => {
    cy.get('[routerlink="/superheroes"]').click()
    cy.get('h2').contains('Heroes')
  });   
});  