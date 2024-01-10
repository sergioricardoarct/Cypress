// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add ("login", ()=>{
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()

})
/// PROJETO "1" ////

import loc from './locators'
Cypress.Commands.add ("login_projeto", (user,password)=>{
    cy.visit('https://barrigareact.wcaquino.me')

        cy.get(loc.LOGIN.USER).type("RamisesMenotep@egt.com")
        cy.get(loc.LOGIN.PASSWORD).type ("Ameno123")  
        cy.get(loc.LOGIN.BTN_LOGIN).click()

})

Cypress.Commands.add ("reset_conta", ()=>{
    cy.get(loc.SETTINGS.BTN_SETTINGS).click()
    cy.get(loc.SETTINGS.BTN_RESET).click()
})

Cypress.Commands.add ("login_projeto_Erro", (user,password)=>{
    cy.visit('https://barrigareact.wcaquino.me')

    cy.get(loc.LOGIN.USER).type("RamisesMenotepa@egt.com")   
    cy.get(loc.LOGIN.PASSWORD).type('Ameno123') 
    cy.get(loc.LOGIN.BTN_LOGIN).click()                  
    cy.get(loc.MENSAGEM.MENSAGEM_ERRO).should("contain", "Erro:")

})
