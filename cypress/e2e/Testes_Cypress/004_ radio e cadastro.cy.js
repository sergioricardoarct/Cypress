/// <reference types="cypress" />


describe ('teste_Texto', () => {
    before (() => {
         cy.visit("https://demo.guru99.com/telecom/index.html")})
    
        it("Busca do Add Costumer", ()=>{
            cy.get('.inner > .left > :nth-child(1)')
            .should('contain','Add Customer')
            cy.get('.left > :nth-child(1) > h3 > a ')
            .click()
            cy.get('h1').should("be.visible")
        })
        
    
        describe('Teste_pagina_consumer',()=>{
            
            it.only ("radio e cadastro", ()=>{
                cy.get('.inner > .left > :nth-child(1)')
                .should('contain','Add Customer')
                cy.get('.left > :nth-child(1) > h3 > a ')
                .click()
                cy.get('h1').should("be.visible")

                ///radio///
                cy.get(':nth-child(1) > label').click()
                
                ///campos de texto///
                cy.get('#fname').type("Amenoth")
                cy.get('#lname').type("Menous")
                cy.get('#email'). type("Amonrah@ gmail.com")
                cy.get(':nth-child(7) > #message').type("Delta do Nilo Egito")                
                cy.get('#telephoneno').type('1213212124')
                
                cy.wait(200)
                cy.get('.actions > :nth-child(1) > input').type('{enter}')
                
                

                cy.get('tbody > :nth-child(1) > :nth-child(1) > b').should("be.visible")
            

        })
    })

}) 