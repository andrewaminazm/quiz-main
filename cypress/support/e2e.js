// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '@shelex/cypress-allure-plugin';
import "cypress-real-events";
Cypress.Commands.add("login", () => {
    cy.visit('https://deem-mail.development.gwstenanta.sa/account/email/INBOX')
            
    cy.get('.rounded-md > .space-y-1 > .relative > .inline-block > .appearance-none').click()
 
    cy.get('.rounded-md > .space-y-1 > .relative > .inline-block > .appearance-none').type('user999@zajilmail.info')
 
    cy.get('.max-w-lg > #kc-form-login > .rounded-md > .-mt-px > .appearance-none').click()
 
    cy.get('.max-w-lg > #kc-form-login > .rounded-md > .-mt-px > .appearance-none').type('secret')
 
    cy.get('.pt-40 > .max-w-lg > #kc-form-login > .mt-2 > .bg-gradient-to-r').click()
 
  cy.wait(4000)
 
    //cy.get('.rounded-md > .space-y-1 > .relative > .inline-block > #code').click()
 
    //cy.get('.rounded-md > .space-y-1 > .relative > .inline-block > #code').type('1234')
 
   // cy.get('.pt-40 > .max-w-lg > #kc-form-login > .mt-2 > .bg-gradient-to-r').click()
   cy.wait(4000)
    
  cy.wait(4000)



    })
 

// Alternatively you can use CommonJS syntax:
// require('./commands')