describe('Check if contains text', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login');
    cy.get('app-login.ng-star-inserted > :nth-child(3) > .ng-star-inserted').click();
    cy.url().should('include', 'http://localhost:4200/admin');
  }); 

    it('display correct text', () => {
      cy.get('[ng-reflect-router-link="[object Object]"]').click()
      cy.get('app-compose-message.ng-star-inserted > h3').contains('Contact Crisis Center')
      cy.get('label').contains('Enter your message:')
      cy.get('app-compose-message.ng-star-inserted > .ng-star-inserted > :nth-child(1)').contains('Send')
      cy.get('app-compose-message.ng-star-inserted > .ng-star-inserted > :nth-child(2)').contains('Cancel')
    });  
  });