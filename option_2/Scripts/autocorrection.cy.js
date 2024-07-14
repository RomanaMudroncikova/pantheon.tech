describe('open sreach bar and create invalid symbol search', () => {
  it('find correct keyword', () => {
    cy.visit('https://docs.cypress.io/')
    cy.get('.osano-cm-denyAll').click()
    cy.get('.navbar__items--right').click()
    cy.get('#docsearch-input').type('equ1')
    cy.get('#docsearch-item-1 > a > .DocSearch-Hit-Container > .DocSearch-Hit-content-wrapper > .DocSearch-Hit-title').contains('equal')
    cy.screenshot('search_autocorrectionsuccessfull')
  })
}) 