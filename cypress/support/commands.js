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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  import '@testing-library/cypress/add-commands'
  import 'cypress-file-upload';
  require('cypress-xpath');
  Cypress.Commands.add("logiin", () => {
    cy.visit('https://meet02.development.gwstenanta.sa/')
   
 
    cy.findByRole('textbox').type('aakheir@deem.sa')
 
    cy.findByPlaceholderText(/password/i).click()
 
    cy.findByPlaceholderText(/password/i).type('A123',{force:true})
 
    cy.findByRole('button', {  name: /login/i}).click()
 

  cy.wait(6000)


    })
    Cypress.Commands.add("adminlogiin", () => {
      cy.visit('https://admin-mail.development.gwstenanta.sa')
      cy.wait(5000)
      cy.wait(5000)      
      cy.get('.rounded-md > .space-y-1 > .relative > .inline-block > .appearance-none').click()
   
      cy.get('.rounded-md > .space-y-1 > .relative > .inline-block > .appearance-none').type('admin@zajilmail.info ')
   
      cy.get('.max-w-lg > #kc-form-login > .rounded-md > .-mt-px > .appearance-none').click()
   
      cy.get('.max-w-lg > #kc-form-login > .rounded-md > .-mt-px > .appearance-none').type('secret',{force:true})
   
      cy.get('.pt-40 > .max-w-lg > #kc-form-login > .mt-2 > .bg-gradient-to-r').click()
   
    cy.wait(5000)
   
      //cy.get('.rounded-md > .space-y-1 > .relative > .inline-block > #code').click()
   
      //cy.get('.rounded-md > .space-y-1 > .relative > .inline-block > #code').type('1234')
   
      //cy.get('.pt-40 > .max-w-lg > #kc-form-login > .mt-2 > .bg-gradient-to-r').click()
   
      
    cy.wait(4000)
    cy.wait(4000)
  
  
      })