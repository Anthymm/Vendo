import PublishButton from "@/components/specific/PublishButton.vue"

describe('Publish Button Component', () => {
  it('gets button', () => {
    cy.mount(PublishButton)
  })
})