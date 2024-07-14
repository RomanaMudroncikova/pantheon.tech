describe('successfully rename Crisis Center', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login');
    cy.get('app-login.ng-star-inserted > :nth-child(3) > .ng-star-inserted').click()
    cy.url().should('include', 'http://localhost:4200/admin');
  });

  it('namerename to Dragon Burning Cities_1', () => {
    cy.get('[routerlink="/crisis-center"]').click()
    cy.get(':nth-child(1) > a').click()
    cy.get('#crisis-name')
      .clear()
      .type('Dragon Burning Cities_1')
    cy.get('app-crisis-detail.ng-star-inserted > .ng-star-inserted > div > :nth-child(1)').click()
  });
});
