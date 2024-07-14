describe('check if is displaz correct name and id', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login')
    cy.get('app-login.ng-star-inserted > :nth-child(3) > .ng-star-inserted').click()
    cy.url().should('include', 'http://localhost:4200/admin');
  });

  it('contains correct id and name', () => {
    cy.get('[routerlink="/crisis-center"]').click()
    cy.get(':nth-child(3) > a').click()
    cy.get(':nth-child(3) > a').contains('Giant Asteroid Heading For Earth')
    cy.get('h3').contains('Giant Asteroid Heading For Earth')
    cy.get('p').contains('3')
    cy.get(':nth-child(3) > a > .badge').contains('3')
  });
});
