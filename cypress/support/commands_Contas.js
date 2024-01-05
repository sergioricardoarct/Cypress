
import loc from'./locators'

Cypress.Commands.add ("acessar_contas", ()=>{
    cy.get(loc.SETTINGS.BTN_SETTINGS).click()
    cy.get(loc.SETTINGS.BTN_CONTA).click()
})