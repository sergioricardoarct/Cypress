/// <reference types="cypress" />


describe ('should VS Then', () => {
    beforeEach (() => {
         cy.visit("https://wcaquino.me/cypress/componentes.html")})

    it ("Should", ()=>{
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('be.visible')
    
    }) 
    
    it ("Then", ()=>{
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('be.visible')
    
    })
})