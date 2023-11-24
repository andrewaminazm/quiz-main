describe('Form Submission ', function(){
   
it('Form Submission', function(){
    cy.visit('https://nxtgenaiacademy.com/demo-site/')
  
    cy.get('#vfb-5').click()
    cy.get('#vfb-5').type('andrew')
    cy.get('#vfb-7').click()
    cy.get('#vfb-7').type('amin')
    cy.get('#vfb-31-1').click()
    cy.get('#vfb-13-address').click()
    cy.get('#vfb-13-address').type('aaaaaaaaaaaaa')
    cy.get('#vfb-13-address-2').click()
    cy.get('#vfb-13-address-2').type('assss')
    cy.get('#vfb-13-city').click()
    cy.get('#vfb-13-city').type('aaaaaaa')
    cy.get('#vfb-13-zip').click()
    cy.get('#vfb-13-zip').type('aaaaaaaaaa')
    cy.get(":nth-child(6) > .select2 > .selection > .select2-selection").click();
    cy.get(".select2-search__field").type("alg{enter}");
    cy.get('#vfb-14').click()
    cy.get('#vfb-14').type('andrewamin878@gmail.com')
    cy.get('#vfb-18').click()
    cy.get('#vfb-18').type('1/1/2022')
    cy.get('.elementor-element-c3b5c53 > .elementor-widget-wrap').click()
    cy.get('#vfb-19').click()
    cy.get('#vfb-19').type('2222222222')
    cy.get('#vfb-20-4').click()
    cy.get('#vfb-3').click()
    cy.get('#vfb-3').type('99')
    cy.get('#vfb-4').click()
    cy.wait(4000)
    cy.get('h2').should('be.visible')

    cy.get('h2').invoke('text').then((text) => {
    expect(text.trim()).contains('Dynamic Transaction Verification')

})  
})

})