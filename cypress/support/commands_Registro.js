import loc from'./locators'


Cypress.Commands.add ("login_valido", ()=>{
    cy.get(loc.SETTINGS.BTN_HOME).should('be.visible')
})

Cypress.Commands.add ("registro", ()=>{
    cy.get(loc.REGISTRO.BTN_REGISTRO).click()
            cy.get(loc.REGISTRO.USER_NAME).type("Ramises Menotep VI")
            cy.get(loc.REGISTRO.USER_EMAIL).type("RamisesMenotepI@egt.com")
            cy.get(loc.REGISTRO.PASSWORD).type ("Ameno123")  
            cy.get(loc.REGISTRO.BTN_SAVE_REGISTRO).click()
            
            cy.get(loc.MENSAGEM).should("be.visible")
})
