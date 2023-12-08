/// <reference types="cypress" />


describe('Login', () => {
    beforeEach(() => {
         cy.visit("https://demo.guru99.com/Agile_Project/Agi_V1/")})
    
    it("Login", () =>{
        cy.get(':nth-child(1) > :nth-child(2) > input') .type("1303")
        cy.get(':nth-child(2) > :nth-child(2) > input') .type("Guru99")
        cy.get('[type="submit"]').click()
        cy.get('.orange > a').should("have.text", "Customer")
    })
})