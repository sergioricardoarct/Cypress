/// <reference types="cypress" />


describe('Introdução ao Cypress', () => {
    it("Visistar uma pagina", () =>{
        cy.visit("https://www.google.com")
        cy.get('.FPdoLc > center > .RNmpXc').should("have.value",'Estou com sorte')
    })
})