/// <reference types="cypress" />

import loc from "../../support/locators"
import "../.././support/commands_Contas"
import "../.././support/commands_Registro"
require ('cypress-xpath')



describe("Testes_Funcionais",()=>{

    beforeEach(()=>{
       cy.login_projeto ("RamisesMenotep@egt.com" ,"Ameno123")
       
    })     
        
/// Login e Usuario Pre cadastrado - Pre condiçoes ///

        it.skip("register", ()=>{cy.registro()})        
        it("login, valid", ()=>{cy.login_valido()})


/// Caso de teste 1 - Inserir uma conta ///
    
        it("Creat an account", ()=>{

            cy.reset_conta()
            cy.acessar_contas()
            cy.add_conta()

            cy.get(loc.MENSAGEM.MENSAGEM_SUC).should("contain", "Conta inserida com sucesso!")
            cy.get('[data-test="menu-home"] > .fas').click()
        })

/// Caso de teste 2 - Alterando uma conta ///

        it("alter an account", ()=>{

            cy.reset_conta()
            cy.acessar_contas()
            cy.add_conta()
            cy.auter_conta()
            
            cy.get(loc.MENSAGEM.MENSAGEM_SUC).should("contain", "Conta atualizada com sucesso!")
            cy.xpath(loc.MENU_CONTA.INSERT_CONTA).should("contain","Construction of Dad's Primanede 1")         
    })

/// Caso de teste 3 - Tentar criar uma conta repetida ///

        it("Conta Repetida", ()=>{
            cy.reset_conta()
            cy.acessar_contas()
            cy.add_conta()
            cy.xpath(loc.MENU_CONTA.INSERT_CONTA).should('be.visible')

            cy.add_conta()
            cy.get(loc.MENSAGEM.MENSAGEM_ERRO).should("contain", "Erro:")
        })

///Caso de teste 4 - Inserir Movientação ///

        it.only("Inserir Movientação", ()=>{

            cy.reset_conta()
            cy.acessar_contas()
            cy.add_conta()
            cy.get(loc.MENU_MOVIMENTAÇÃO.BTN_MOVIMENTAÇÃO).click()
            cy.get(loc.MENU_MOVIMENTAÇÃO.DESCRICAO). type('Investimento do Faraó')
            cy.get(loc.MENU_MOVIMENTAÇÃO.CONTA_MOVI).select(["The Construction of Dad's Primanede"])
            cy.get(loc.MENU_MOVIMENTAÇÃO.VALOR_MOVI). type('1200')
            cy.get(loc.MENU_MOVIMENTAÇÃO.ENVOLVIDO). type('Tutacamon IV')
            cy.get(loc.MENU_MOVIMENTAÇÃO.BTN_RECEITA). click()
            cy.get(loc.MENU_MOVIMENTAÇÃO.BTN_SAVE_MOVI).click()

            cy.get(loc.MENSAGEM.MENSAGEM_SUC).should("be.visible")
            cy.xpath('//  div [ @class ="list-group"] // li //span [contains(text(),"Investimento do Faraó")]').should('be.visible')
            
        })


})

describe("teste de login sem acesso", ()=>{


    before(()=>{cy.visit('https://barrigareact.wcaquino.me')})

        it("No login, no user registered", ()=>{

            cy.login_projeto ("RamisesMenotepa@egt.com" ,"Ameno123")                       
            cy.get(loc.MENSAGEM.MENSAGEM_ERRO).should("contain", "Erro:")
        })
})





















