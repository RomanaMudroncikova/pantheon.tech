
  describe('Login admin', () => {
   
    it('Admin redirected to Admin', () => {
      cy.visit('http://localhost:4200/login')
      cy.get('app-login.ng-star-inserted > :nth-child(3) > .ng-star-inserted').click();
      cy.url().should('include', 'http://localhost:4200/admin');
    });
}); 
  