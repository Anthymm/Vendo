import PublishButton from '@/components/specific/PublishButton.vue'

describe('Publish Button Component', () => {
  beforeEach(() => {
    cy.mount(PublishButton)
  })

  it('button exists', () => {
    cy.get('button').should('exist')
  })

  it('tests POST request', () => {
    cy.intercept('POST', '/api/listings').as('publishRequest')

    cy.get('button').click()

    cy.wait('@publishRequest').then((interception) => {
      console.log(interception)
    })
  })

  it('button shows modal displaying publish status', () => {
    cy.get('button').click()

    cy.contains('Din annons har blivit publicerad').should('be.visible')
  })

  it('button is disabled if not enough fields are filled in previous segments', () => {
    cy.get('button').should('be.disabled')
  })
})
