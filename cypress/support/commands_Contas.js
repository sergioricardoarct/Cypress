import loc from'./locators'


Cypress.Commands.add ("acessar_contas", ()=>{
    cy.get(loc.SETTINGS.BTN_SETTINGS).click()
    cy.get(loc.SETTINGS.BTN_CONTA).click()
})

Cypress.Commands.add ("add_conta", ()=>{
    cy.get(loc.MENU_CONTA.CONTA).type("The Construction of Dad's Primanede")
    cy.get(loc.MENU_CONTA.BTN_CONTA).click()
})
Cypress.Commands.add ("auter_conta", ()=>{
    cy.xpath(loc.MENU_CONTA.INSERT_CONTA).click()
    cy.xpath(loc.MENU_CONTA.VALOR_EDIT).click()
    cy.get(loc.MENU_CONTA.CONTA).clear()
    cy.get(loc.MENU_CONTA.CONTA).type("The Construction of Dad's Primanede 1")
    cy.get(loc.MENU_CONTA.BTN_SAVE_CONTA).click()
})