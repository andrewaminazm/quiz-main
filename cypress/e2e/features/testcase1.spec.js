describe('Task 1:', function(){
    it(' Login and Validation  ', function(){

        cy.visit('https://www.amazon.sa/-/en/')
        cy.url().should('eq', 'https://www.amazon.sa/-/en/')
    .then(() => {
                // we are trying to return something
                // from the .within callback,
                // but it won't have any effect
              cy.log('check url valid ')
              })

cy.findByRole('link', {  name: /hello, sign in account & lists/i}).should('be.visible').then(() => {
    // we are trying to return something
    // from the .within callback,
    // but it won't have any effect
  cy.log('check login button appear')
  })

cy.findByRole('link', {  name: /hello, sign in account & lists/i}).click()

cy.findByRole('textbox', {  name: /email or mobile phone number/i}).should('be.visible').then(() => {
   
  cy.log('phone button appear')
  })

  cy.findByRole('textbox', {  name: /email or mobile phone number/i}).type('547984666')

  cy.findByRole('button', {  name: /continue/i}).should('be.enabled').then(() => {
   
  cy.log('continue button enabled')
  })
  cy.findByRole('button', {  name: /continue/i}).click()
  cy.get("#ap_password").click()
  cy.get("#ap_password").type('andrewamin')
  cy.get("#signInSubmit").should('be.enabled').then(() => {
   
    cy.log('submit button enabled')
    })
    cy.get("#signInSubmit").click()
    cy.get('#nav-link-accountList-nav-line-1').invoke('text').then((text) => {
        expect(text.trim()).contains('andrewamin')
    
    })  
})


})