import PublishButton from '@/components/specific/PublishButton.vue'

describe('Publish Button Component', () => {
  beforeEach(() => {
    cy.mount(PublishButton)
  })

  it('button exists', () => {
    cy.get('#publishButton').should('exist')
  })

  it('test post request', () => {
    cy.intercept('POST', '/api/publish/', {
      statusCode: 200,
      body: { success: true },
    }).as('publishRequest')

    cy.get('#publishButton').click()

    cy.wait('@publishRequest').its('response.statusCode').should('eq', 200)
  })
})
