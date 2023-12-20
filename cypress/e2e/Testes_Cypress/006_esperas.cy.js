/// <reference types="cypress" />


describe ('teste_Texto', () => {
    beforeEach (() => {
         cy.visit("https://wcaquino.me/cypress/componentes.html")})

    it ("Combo Multiplos", ()=>{
        cy.get('#buttonDelay').click()
        
        cy.get('#novoCampo').should('be.visible')

    })

})