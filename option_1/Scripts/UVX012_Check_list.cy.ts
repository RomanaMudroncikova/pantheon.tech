describe('chek if the heroes listis display', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login');
    cy.get('app-login.ng-star-inserted > :nth-child(3) > .ng-star-inserted').click()
    cy.url().should('include', 'http://localhost:4200/admin');
  }); 

    it('contains list of heroes', () => {
      cy.get('[routerlink="/superheroes"]').click()
      cy.get('app-hero-list.ng-star-inserted').should('be.visible')
      cy.get('app-hero-list.ng-star-inserted').find('li').should('have.length', 9)
      const expectedHeroes = 
      [
        'Dr. Nice',
        'Bombasto',
        'Celeritas',
        'Magneta',
        'RubberMan',
        'Dynama',
        'Dr. IQ',
        'Magma',
        'Tornado' 
      ]
      cy.get('app-hero-list.ng-star-inserted').find('li').each((item, index) => {
      cy.wrap(item).should('contain.text', expectedHeroes[index])
      }); 
    });
  }); 
