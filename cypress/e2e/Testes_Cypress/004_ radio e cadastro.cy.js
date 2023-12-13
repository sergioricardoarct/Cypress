/// <reference types="cypress" />


describe ('teste_Texto', () => {
    beforeEach (() => {
         cy.visit("https://demo.guru99.com/telecom/index.html")})
    
        it. skip("Busca do Add Costumer", ()=>{
            cy.get('.inner > .left > :nth-child(1)')
                .should('contain','Add Customer')
            cy.get('.left > :nth-child(1) > h3 > a ')
                .click()

            cy.get('h1').should("be.visible")
        })
        
    
        describe('Teste_pagina_consumer',()=>{
            
            it ("radio e cadastro", ()=>{
                cy.get('.inner > .left > :nth-child(1)')
                    .should('contain','Add Customer')
                cy.get('.left > :nth-child(1) > h3 > a ')
                    .click()

                cy.get('h1').should("be.visible")

                ///radio///
                cy.get(':nth-child(1) > label')
                    .click()
                
                ///campos de texto///
                cy.get('#fname')
                    .type("Amenoth")
                cy.get('#lname')
                    .type("Menous")
                cy.get('#email')
                    . type("Amonrah@ gmail.com")
                cy.get(':nth-child(7) > #message')
                    .type("Delta do Nilo Egito")                
                cy.get('#telephoneno')
                    .type('1213212124')
                
                                                                                     // erro encontrado - botão de submit não clicável, aqui gerar relatório de bug. 
                                                                                    //Solução para continuar teste foi colocar em suport/2e2.js
                cy.get('.actions > :nth-child(1) > input')
                    .click()
                cy.get('tbody > :nth-child(1) > :nth-child(1) > b')
                    .should("be.visible")

                cy.get('h3').invoke("text")
                    .then(($el)=>{if($el != null){
                        Cypress.env('consumerId',$el)
                        cy.log(Cypress.env('consumerId'))
                    }})
                
            })

            it('Copiar e usar consumerId', ()=>{
                cy.get('.left > :nth-child(2) > h3 > a')
                    .click()
                cy.get('#customer_id')
                    .type(Cypress.env('consumerId'))


                cy.get('h3').should("be.visible")
                
                cy.get('.fit')
                    .click()

                cy.get('font').should("be.visible")


            })

        })
    })

