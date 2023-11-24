describe('Shopping Cart ', function(){
 
it('Shopping Cart   ', function(){
    cy.visit('https://www.amazon.sa/-/en/')
    cy.url().should('eq', 'https://www.amazon.sa/-/en/')
.then(() => {
            // we are trying to return something
            // from the .within callback,
            // but it won't have any effect
          cy.log('check url valid ')
          })
 
cy.findByRole('textbox', {  name: /search amazon\.sa/i}).click()

cy.findByRole('textbox', {  name: /search amazon\.sa/i}).type('spiderman{enter}')

cy.findByText(/marvel plush core spiderman 8\-inches/i).click()
cy.get('#add-to-cart-button').realClick()
cy.get('#nav-cart-count').invoke('text').then((text) => {
    expect(text.trim()).contains('1')
cy.log('item added success')
})  
cy.get('#ewc-content').should('be.visible')

})

  
 
})

