/// <reference types="cypress" />
import loc from "../../support/locators"
import "../.././support/commands_Contas"
require ('cypress-xpath')

describe("Testes_Funcionais",()=>{

    beforeEach(()=>{
       cy.login_projeto ("RamisesMenotep@egt.com" ,"Ameno123")
       cy.reset_conta()
       
        //cy.visit('https://barrigareact.wcaquino.me')

       // cy.get(loc.LOGIN.USER).type("RamisesMenotep@egt.com")
       // cy.get(loc.LOGIN.PASSWORD).type ("Ameno123")  
       // cy.get(loc.LOGIN.BTN_LOGIN).click()
        
       // cy.get(loc.MENSAGEM).should("contain", "Bem vindo")
    })     
        
        /// Login e Usuario Pre cadastrado - Pre condiçoes ///
        
        it("login, valid", ()=>{
            cy.get(loc.SETTINGS.BTN_HOME).should('be.visible')
        })

        /// Caso de teste 1 - Inserir uma conta ///
    
        it("Creat an account", ()=>{

            //cy.get(loc.SETTINGS.BTN_SETTINGS).click()
            //cy.get(loc.SETTINGS.BTN_RESET).click()
            cy.reset_conta()
            cy.acessar_contas()
            //cy.get(loc.SETTINGS.BTN_SETTINGS).click()
            //cy.get(loc.SETTINGS.BTN_CONTA).click()
            cy.get(loc.MENU_CONTA.CONTA). type("Construction of Dad's Primanede")
            cy.get(loc.MENU_CONTA.BTN_CONTA).click()

            cy.get(loc.MENSAGEM.MENSAGEM_SUC).should("contain", "Conta inserida com sucesso!")
            cy.get('[data-test="menu-home"] > .fas').click()
        })

        /// Caso de teste 2 - Alterando uma conta ///

        it.only("alter an account", ()=>{

            cy.reset_conta()
            //cy.get(loc.SETTINGS.BTN_SETTINGS).click()
            //cy.get(loc.SETTINGS.BTN_CONTA).click()
            cy.acessar_contas()

            cy.get(loc.MENU_CONTA.CONTA). type("The Construction of Dad's Primanede")
            cy.get(loc.MENU_CONTA.BTN_CONTA).click()
            
            cy.xpath(loc.MENU_CONTA.INSERT_CONTA).click()
            cy.xpath(loc.MENU_CONTA.VALOR_EDIT).click()
            cy.get(loc.MENU_CONTA.CONTA).clear()
            cy.get(loc.MENU_CONTA.CONTA).type("The Construction of Dad's Primanede 1")
            cy.get(loc.MENU_CONTA.BTN_SAVE_CONTA).click()

            cy.get(loc.MENSAGEM.MENSAGEM_SUC).should("contain", "Conta atualizada com sucesso!")
            cy.get(':nth-child(7) > :nth-child(1)').should("contain","Construction of Dad's Primanede 1")         
    })
})

describe("teste de login sem acesso", ()=>{


    before(()=>{cy.visit('https://barrigareact.wcaquino.me')})

        it.skip("register", ()=>{

            cy.get(loc.REGISTRO.BTN_REGISTRO).click()
            cy.get(loc.REGISTRO.USER_NAME).type("Ramises Menotep VI")
            cy.get(loc.REGISTRO.USER_EMAIL).type("RamisesMenotepI@egt.com")
            cy.get(loc.REGISTRO.PASSWORD).type ("Ameno123")  
            cy.get(loc.REGISTRO.BTN_SAVE_REGISTRO).click()
            
            cy.get(loc.MENSAGEM).should("be.visible")
        })

        it("No login, no user registered", ()=>{

            cy.get(loc.LOGIN.USER).type("RamisesMenotepa@egt.com")
            cy.get(loc.LOGIN.PASSWORD).type ("Ameno123")  
            cy.get(loc.LOGIN.BTN_LOGIN).click()
            
            cy.get(loc.MENSAGEM.MENSAGEM_ERRO).should("contain", "Erro:")
        })
})





















