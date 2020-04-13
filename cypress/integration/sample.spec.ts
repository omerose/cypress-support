describe("Sample Cypress setup", () => {
  it("should go to Google using a command", () => {
    cy.google()
  })

  it("should go to Google directly", () => {
    cy.visit("https://google.com")
  })
})
