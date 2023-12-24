/// <reference types="cypress" />


describe ('Teste_Orange', () => {
    beforeEach(() => {
         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
                
        })
         
    it("pagina aberta", ()=>{

        cy.get('.orangehrm-login-logo > img').should("be.visible")
    }) 

    
    it("Login", ()=>{

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()

        cy.get('.oxd-brand-banner > img').should("be.visible")
    }) 

    it("Clicar em pim", ()=>{

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()

        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
    })
    it.only('Cadastrar',()=>{
        ///Login///
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()

        cy.get('.oxd-brand-banner > img').should("be.visible")

        ///Clicar no pim///
         cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()

        ///cadastro///
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("Amentep")
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type("Hapinatra")
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type("II")

        let Idemployee = "0777"
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input')
        .click().clear().type(Idemployee)
        

        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input')            
        cy.get('.oxd-button--secondary').click()
        cy.get('.oxd-toast').should('be.visible')

        
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
        cy.get(':nth-child(2) > .oxd-input').type(Idemployee)
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()

        cy.get('.orangehrm-horizontal-padding > .oxd-text'). should('contain','(1) Record Found')

        /// delete

        cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click()
        cy.get('.oxd-button--label-danger').click()
        cy.get('.oxd-toast').should('be.visible')
            
    }) 

    it.only("time erro", ()=>{
        cy.get(':nth-child(4) > .oxd-main-menu-item').should("be.visible")
        cy.get(':nth-child(4) > .oxd-main-menu-item').click()
        
        cy.get('.oxd-autocomplete-text-input > input').type("Paul Collings")
        cy.get('.oxd-form-actions > .oxd-button').click()
        cy.get('.oxd-input-group > .oxd-text').should("be.visible")


    })     
})
