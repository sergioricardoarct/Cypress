/// <reference types="cypress" />


describe ('teste_Texto', () => {
    beforeEach (() => {
         cy.visit("https://wcaquino.me/cypress/componentes.html")})

    it ("Combo Multiplos", ()=>{
        cy.get('[data-testid="dataEsportes"]')
            .select(["natacao", "Corrida"])            ///pesquisar o value

    })

})