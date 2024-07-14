describe('select a random hero and display information', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login');
    cy.get('app-login.ng-star-inserted > :nth-child(3) > .ng-star-inserted').click();
    cy.url().should('include', 'http://localhost:4200/admin');
  }); 

  it('information is display', () => {
    cy.visit('http://localhost:4200/superheroes');
    cy.get('a > .badge').should('have.length.greaterThan', 0)
      .its('length')
      .then((badgeCount) => {
        const randomIndex = Cypress._.random(0, badgeCount - 1);
    cy.get('a > .badge').eq(randomIndex).click();
      });
  });
});
