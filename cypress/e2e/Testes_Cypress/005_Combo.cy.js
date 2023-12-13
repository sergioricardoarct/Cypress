/// <reference types="cypress" />


describe ('Teste_Orange', () => {
    beforeEach(() => {
         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
                
        })
         
    it("pagina aberta", ()=>{

        cy.get('.orangehrm-login-logo > img').should("be.visible")
    }) 

    
    it.only("Login", ()=>{

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('admin123')
        cy.get('.oxd-button').click()

        cy.get('.oxd-brand-banner > img').should("be.visible")
    }) 

    it.only ("Clicar em pim", ()=>{

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('admin123')
        cy.get('.oxd-button').click()

        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
    })
})