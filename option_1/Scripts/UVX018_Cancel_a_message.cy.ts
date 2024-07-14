function generateRandomString(maxLength) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const length = Math.floor(Math.random() * maxLength) + 1;
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

describe('cancel write message', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login');
    cy.get('app-login.ng-star-inserted > :nth-child(3) > .ng-star-inserted').click();
    cy.url().should('include', 'http://localhost:4200/admin');
  }); 
  

    it('do not send a message', () => {
      const text = generateRandomString(1300);
      cy.get('[ng-reflect-router-link="[object Object]"]').click()
      cy.get('#message').type(text)
      cy.get('app-compose-message.ng-star-inserted > .ng-star-inserted > :nth-child(2)').click()
    }); 
  });