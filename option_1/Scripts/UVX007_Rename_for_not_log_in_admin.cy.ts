describe('rename is able for not lof in admin', () => {
  it('rename crisis is able', () => {
    cy.visit('http://localhost:4200/crisis-center')
    cy.get(':nth-child(4) > a').click()
    cy.get('#crisis-name')
      .clear()
      .type('Procrastinators Meeting Delayed Again_1')
    cy.get('app-crisis-detail.ng-star-inserted > .ng-star-inserted > div > :nth-child(1)').click()
  })
})