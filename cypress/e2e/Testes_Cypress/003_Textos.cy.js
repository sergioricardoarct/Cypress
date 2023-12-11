/// <reference types="cypress" />


describe ('teste_Texto', () => {
    before (() => {
         cy.visit("https://demo.guru99.com/telecom/index.html")})
    
    it("Busca do titulo", ()=>{
        cy.get('.left > .logo').should("be.visible")
    })
    it("Busca do Add Costumer", ()=>{
        cy.get('.inner > .left > :nth-child(1)')
        .should('contain','Add Customer')
        cy.get('.left > :nth-child(1) > h3 > a ')
        .click()
        cy.get('h1').should("be.visible")
    })
    

}) 