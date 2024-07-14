describe('Select 17 Dynama and rename her', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login')
    cy.get('app-login.ng-star-inserted > :nth-child(3) > .ng-star-inserted').click()
    cy.url().should('include', 'http://localhost:4200/admin');
  }); 

  it('rename to Dynama_1', () => { 
    cy.get('[routerlink="/superheroes"]').click() 
    cy.get(':nth-child(6) > a').click() 
    cy.get('#hero-name')
      .clear()
      .type('Dynama_1') 
    cy.get('button').click()
    cy.get('.selected > a').contains('Dynama_1')
  });  
}); 