describe('open sreach bar and create search', () => {
  it('seach successfull', () => {
    cy.visit('https://docs.cypress.io/')
    cy.get('.osano-cm-denyAll').click()
    cy.get('.navbar__items--right').click()
    cy.get('#docsearch-input').type('should')
    cy.get('#docsearch-item-1 > a > .DocSearch-Hit-Container > .DocSearch-Hit-content-wrapper > .DocSearch-Hit-title > mark')
    .invoke('css', 'color')
    .should('eq', 'rgb(31, 169, 113)')
    cy.screenshot('search_should')
  })
}) 