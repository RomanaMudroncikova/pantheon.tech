describe('dashboard should contains text', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login');
    cy.get('app-login.ng-star-inserted > :nth-child(3) > .ng-star-inserted').click()
    cy.url().should('include', 'http://localhost:4200/admin');
  }); 

    it('display correct text', () => {
      cy.get('[routerlink="./"]').click()
      cy.get('h2').contains('Admin')
      cy.get('h3').contains('Dashboard')
      cy.get('app-admin-dashboard.ng-star-inserted').contains('Session ID: None' )
      cy.get('app-admin-dashboard.ng-star-inserted').contains('Token: None')
      cy.get('app-admin-dashboard.ng-star-inserted').contains('Preloaded Modules')
      cy.get('app-admin-dashboard.ng-star-inserted').contains('crisis-center')
    });
  });
  
