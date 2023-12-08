/// <reference types="cypress" />


describe('Introdução ao Cypress', () => {
    beforeEach(() => {
         cy.visit("https://www.google.com")})
    
    it("Visistar uma pagina", () =>{
        cy.get('.FPdoLc > center > .RNmpXc')
        .should("have.value",'Estou com sorte')
    })
               
})
