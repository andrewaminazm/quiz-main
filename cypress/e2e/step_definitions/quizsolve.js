import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

  
  const reservationpage = require("../../pages/reservationpage");
  
  
Given("i navigate to the url", () => {
    cy.visit("/");
    
    cy.url().should('eq', 'https://airmalta.com/en')
    .then(() => {
                // we are trying to return something
                // from the .within callback,
                // but it won't have any effect
              cy.log('check url valid ')
              })

  });
  
When("user be on  home page", () =>{
  
   
cy.wait(4000)
   
  });
  
  
Then("verify title of page", () => {
  
    cy.title().should('eq', 'Air Malta | The Airline of the Maltese Islands : Air Malta') .then(() => {
        // we are trying to return something
        // from the .within callback,
        // but it won't have any effect
      cy.log('check title valid ')
      })
  });
  Then("verify the component of homepage appear", () => {
  
    reservationpage.elements.mainlogo().should('be.visible')
    reservationpage.elements.mainimage().should('be.visible')
    reservationpage.elements.language().should('be.visible')
    reservationpage.elements.loginbutton().should('be.visible')
    reservationpage.elements.help().should('be.visible')
    reservationpage.elements.content().scrollIntoView()
    reservationpage.elements.content().should('be.visible')
    cy.scrollTo(0, 500) 
    reservationpage.elements.middlearea().scrollIntoView({force:true})
    reservationpage.elements.middlearea().should('be.visible')
    cy.wait(2000)
    reservationpage.elements.undermiddlearea().scrollIntoView({force:true})
    reservationpage.elements.undermiddlearea().should('be.visible')
    cy.wait(2000)
    reservationpage.elements.footer().scrollIntoView({force:true})
    reservationpage.elements.footer().should('be.visible')
    cy.wait(2000)
  });
  Then("get the first available flight price from Vienna International", () => {
  
reservationpage.elements.departingfrom().click()
cy.wait(1000)
reservationpage.elements.vienaairport().click()
cy.wait(1000)
reservationpage.elements.flyingto().click()
cy.wait(1000)
reservationpage.elements.maltaairport().click()
cy.wait(1000)
reservationpage.elements.depardate().click({force:true})
reservationpage.elements.maymonth().invoke('text').then((text) => {
  expect(text.trim()).contains( 'May' )

})
cy.wait(1000)
reservationpage.elements.firstprice().click({force:true})
reservationpage.elements.firstprice().invoke('text').then((text) => {
  cy.log(' first price  is'+""+text)

})
cy.wait(1000)
reservationpage.elements.firstpricee().invoke('text').then((text) => {
  cy.log('price today is'+""+text)

})
cy.wait(1000)

  });