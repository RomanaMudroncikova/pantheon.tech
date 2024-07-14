describe('check if crisiscontains correct text', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login');
    cy.get('app-login.ng-star-inserted > :nth-child(3) > .ng-star-inserted').click()
    cy.url().should('include', 'http://localhost:4200/admin');
  });

  it('contains correct text', () => {
    cy.get('[routerlink="/crisis-center"]').click()
    cy.get('.title').should('have.contain', 'Angular Router')
    cy.get('h2').should('have.contain', 'Crisis Center')
    cy.get('h3').should('have.contain', 'Welcome to the Crisis Center')
  });
});
