/// <reference types="cypress" />


describe ('teste_Texto', () => {
    beforeEach (() => {
         cy.visit("https://wcaquino.me/cypress/componentes.html")})

    it ("Combo Multiplos", ()=>{
        cy.get('[data-testid="dataEsportes"]')
            .select(["natacao", "Corrida"])            ///pesquisar o value

    })
    it("não cadastrado", ()=>{
        cy.get('#resultado').should('contain','Status: Nao cadastrado')
    })
    it("não cadastrado", ()=>{
        cy.get('#buttonPopUp').click()
    })
})