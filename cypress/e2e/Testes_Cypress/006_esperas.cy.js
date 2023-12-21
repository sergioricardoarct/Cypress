/// <reference types="cypress" />


describe ('teste_Texto', () => {
    beforeEach (() => {
         cy.visit("https://wcaquino.me/cypress/componentes.html")})

    it ("Delay", ()=>{
        cy.get('#buttonDelay').click()
        
        cy.get('#novoCampo').should('be.visible')

    })

    it ("Wait...", ()=>{
        cy.get('#buttonDelay').click()
        .wait(4000)                                 // em milisegundos
        cy.get('#novoCampo').should('be.visible')

    })  
})