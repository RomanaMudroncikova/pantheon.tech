describe('open sreach bar and navigate throught keystrokes', () => {
  it('display page overview', () => {
    cy.visit('https://docs.cypress.io/')
    cy.get('.osano-cm-denyAll').click()
    cy.get('.navbar__items--right').click()
    cy.get('#docsearch-input').type('testing') 
    cy.get('#docsearch-input').type('{downarrow}{uparrow}{enter}')
    cy.url().should('eq', 'https://docs.cypress.io/guides/component-testing/svelte/overview#__docusaurus_skipToContent_fallback')
    cy.screenshot('search_navigate')
  })
}) 