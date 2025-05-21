import PublishButton from '@/components/specific/PublishButton.vue'

describe('Publish Button Component', () => {
  beforeEach(() => {
    cy.mount(PublishButton)
  })

  it('button exists', () => {
    cy.get('#publishButton').should('exist')
  })

  it('tests POST request', () => {
    cy.intercept('POST', '/api/listings').as('publishRequest')

    cy.get('#publishButton').click()

    cy.wait('@publishRequest').then((interception) => {
      console.log(interception)
    })
  })

  it('button shows modal displaying publish status', () => {
    cy.get('#publishButton').click()

    cy.contains('#modal').contains('Din annons har blivit publicerad').should('be.visible')
  })

  /**
   * need to add: if not all requirements for publishing are fullfilled that button is disabled
   */
})
