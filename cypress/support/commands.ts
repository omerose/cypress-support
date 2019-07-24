// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/**
 * Goes to google site
 */
Cypress.Commands.add('google', () => cy.visit('https://google.com'))

/**
 * Navigates to page with pageName
 */
Cypress.Commands.add('navigate', (pageName) => {
  // Find navigation menu item
  // Click on it
  cy.visit(`/${pageName}`)
})

// Must be declared global to be detected by typescript (allows import/export)
// tslint:disable-next-line:no-namespace
declare global {
  namespace Cypress {
    // tslint:disable-next-line:interface-name
    interface Chainable<Subject> {
      google(): Chainable<Subject>;
      navigate(pageName: string): void
    }
  }
}

// Convert this to a module instead of script (allows import/export)
export {}
