describe('navigation bar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login');
    cy.get('app-login.ng-star-inserted > :nth-child(3) > .ng-star-inserted').click()
    cy.url().should('include', 'http://localhost:4200/admin');
  });

  it('contains correct text', () => {
    cy.get('[routerlink="/crisis-center"]').click()
    cy.url().should('include', 'http://localhost:4200/crisis-center')
    cy.get('[ng-reflect-router-link="[object Object]"]').click()
    cy.url().should('include', 'http://localhost:4200/crisis-center(popup:compose)')
    cy.get('[routerlink="/superheroes"]').click()
    cy.url().should('include', 'http://localhost:4200/superheroes')
    cy.get('[routerlink="/login"]').click()
    cy.url().should('include', 'http://localhost:4200/login')
  });
});