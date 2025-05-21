describe('Create a post test', () => {
  beforeEach(() => {
    cy.visit('localhost:5173/publish')
  })

  it('should be visible and clickable', () => {
    cy.get('#focusButton')
      .should('be.visible')
      .and('not.be.disabled')
      .click()
  })

  it('show a confirmation message after clicking', () => {
    cy.get('#focusButton').click()

    /**
     * Could change to "Din annons väntar nu granskning, innan den publiceras"
     */
    cy.contains('Din annons har blivit publicerad').should('be.visible')
  })

  it('should trigger an API request when clicked', () => {
    cy.intercept('POST', '/api/publish', {
      statusCode: 200,
      body: { success: true },
    }).as('publishRequest')

    cy.get('#focusButton').click()

    cy.wait('@publishRequest').its('response.statusCode').should('eq', 200)
  })
})
