import loc from'./locators'


Cypress.Commands.add ("movimentar_conta", ()=>{
    cy.get(loc.MENU_MOVIMENTAÇÃO.BTN_MOVIMENTAÇÃO).click()
    cy.get(loc.MENU_MOVIMENTAÇÃO.DESCRICAO).type('Investimento do Faraó')
    cy.get(loc.MENU_MOVIMENTAÇÃO.CONTA_MOVI).select(["The Construction of Dad's Primanede"])
    cy.get(loc.MENU_MOVIMENTAÇÃO.VALOR_MOVI).type('1200')
    cy.get(loc.MENU_MOVIMENTAÇÃO.ENVOLVIDO).type('Tutacamon IV')
    cy.get(loc.MENU_MOVIMENTAÇÃO.BTN_RECEITA).click()
    cy.get(loc.MENU_MOVIMENTAÇÃO.BTN_SAVE_MOVI).click()
})
