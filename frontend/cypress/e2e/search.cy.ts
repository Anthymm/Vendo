describe('search', () => {
  it('search with enter', () => {
    cy.visit('localhost:5173')
    cy.get('input').type('Test Object{enter}')
  })
  it('search without enter', () => {
    cy.get('input').type('Test Object')
    cy.get('button').click()
  })
})
