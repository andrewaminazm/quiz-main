class reservationpage {
    elements = {
    
     mainlogo:()=> cy.get('.container > .navbar-brand > .white-logo'),
     loginbutton:()=>cy.findByRole('link', {  name: /person_outline login/i}),
     help:()=>cy.findByRole('link', {  name: /help_outline help & support/i}),
     language:()=>cy.findByRole('link', {  name: /international/i}),
     search:()=>cy.findByRole('link', {  name: /search search/i}),
     mainimage:()=>cy.get('.heroCarousel-1 > .carousel-caption'),
     content:()=>cy.get('.content'),
     middlearea:()=>cy.findByRole('heading', {  name: /explore the maltese islands/i}),
     undermiddlearea:()=>cy.findByRole('heading', {  name: /i'm looking for\.\.\./i}),
     footer:()=>cy.get('.footer-container'),
     departingfrom:()=>cy.get('.route-selection-origin > .input-holder > .form-control'),
     vienaairport:()=>cy.findByRole('button', {  name: /vienna international vie/i}),
     flyingto:()=>cy.findByText(/search airport/i),
     maltaairport:()=>cy.findByRole('button', {  name: /malta international airport mla/i}),
     depardate:()=>cy.get('.startDate > .form-control'),
     firstprice:()=>cy.get('.DayPicker-Day--today > .date-picker-day-cell > .calendar-flight-price'),
     firstpricee:()=>cy.get('.DayPicker-Day--start > .date-picker-day-cell > .calendar-flight-price'),
     maymonth:()=>cy.get(':nth-child(1) > .DayPicker-Caption > div')



     
    

    };
    
  }
  
  module.exports = new reservationpage();