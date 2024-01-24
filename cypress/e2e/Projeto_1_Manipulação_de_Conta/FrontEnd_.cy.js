/// <reference types="cypress" />

import loc from "../../support/locators"
import "../../support/commands_Contas"
import "../../support/commands_Registro"
import "../../support/commands_Movimentação"

require ('cypress-xpath')



describe("Testes_FrontEnd",()=>{
       // afterEach(()=>{
        //     cy.clearlocalStorage()
        //  })
        before(()=>{
                cy.intercept({
                        method: 'POST',
                        path: 'https://barrigarest.wcaquino.me/signin'},
                        { id:1111,
                        nome:'iaiafhds',
                        token:'qualquer coisa'}).as("rotaA")

                
                cy.login_projeto ("RamisesMenotep@egt.com" ,"Ameno123")
        })     
        
/// Login e Usuario Pre cadastrado - Pre condiçoes ///

        it.skip("Register", ()=>{cy.registro()})        
        it.skip("login, valid", ()=>{cy.login_valido()})


/// Caso de teste 1 - Inserir uma conta ///
    
        it.only("Cricar uma conta", ()=>{

            cy.reset_conta() 
                cy.intercept({
                        path:"https://barrigarest.wcaquino.me/contas",
                        method:"get"},
                        [
                                {
                                    "id": 100100,
                                    "nome": "Conta para alterar",
                                    "visivel": true,
                                    "usuario_id": 46333
                                },
                                {
                                    "id": 2023143,
                                    "nome": "Conta mesmo nome",
                                    "visivel": true,
                                    "usuario_id": 46333
                                },
                                {
                                    "id": 2023144,
                                    "nome": "Conta para movimentacoes",
                                    "visivel": true,
                                    "usuario_id": 46333
                                },
                                {
                                    "id": 2023145,
                                    "nome": "Conta com movimentacao",
                                    "visivel": true,
                                    "usuario_id": 46333
                                },
                                {
                                    "id": 2023146,
                                    "nome": "Conta para saldo",
                                    "visivel": true,
                                    "usuario_id": 46333
                                },
                                {
                                    "id": 2023147,
                                    "nome": "Conta para extrato",
                                    "visivel": true,
                                    "usuario_id": 46333
                                },
                                {
                                    "id": 2023148,
                                    "nome": "The Construction of Dad's Primanede",
                                    "visivel": true,
                                    "usuario_id": 46333
                                }
                        ],
                ).as ("Contas")
                cy.intercept({
                        path:"https://barrigarest.wcaquino.me/contas",
                        method:"POST"},
                        {"id":2024681,"nome":"asd","visivel":true,"usuario_id":46333}

                ). as("resposta")

            cy.acessar_contas()
            cy.add_conta()

            cy.get(loc.MENSAGEM.MENSAGEM_SUC).should("contain", "Conta inserida com sucesso!")
            cy.get(loc.SETTINGS.BTN_HOME).click()
        })

/// Caso de teste 2 - Alterando uma conta ///

        it("Alteração de conta", ()=>{

            cy.reset_conta()
            cy.acessar_contas()
            cy.add_conta()
            cy.auter_conta()
            
            cy.get(loc.MENSAGEM.MENSAGEM_SUC).should("contain", "Conta atualizada com sucesso!")
            cy.xpath(loc.MENU_CONTA.INSERT_CONTA).should("contain","Construction of Dad's Primanede 1")         
    })

/// Caso de teste 3 - Tentar criar uma conta repetida ///

        it("Repetir conta", ()=>{

            cy.reset_conta()
            cy.acessar_contas()
            cy.add_conta()
            cy.xpath(loc.MENU_CONTA.INSERT_CONTA).should('be.visible')

            cy.add_conta()
            cy.get(loc.MENSAGEM.MENSAGEM_ERRO).should("contain", "Erro:")
        })

///Caso de teste 4 - Inserir Movientação ///

        it("Inserir Movientação", ()=>{

            cy.reset_conta()
            cy.acessar_contas()
            cy.add_conta()
            cy.movimentar_conta()

            cy.get(loc.MENSAGEM.MENSAGEM_SUC).should("be.visible")
            cy.xpath(loc.MENU_MOVIMENTAÇÃO.VALIDACAO_MOVI).should('be.visible')
            
        })


///Caso de teste 5 - Saldo da Movientação /// 

        it("Saldo", ()=>{

           cy.get(loc.SETTINGS.BTN_HOME).click()
           cy.xpath(loc.SALDO.FS_XP_SALDO_VALOR('Construction')).should('contain.text', '1.200,00')
            
        })

///Caso de teste 6 - Deletar Movimentação /// 

        it("Remover Movimentação", ()=>{

            cy.reset_conta()
            cy.acessar_contas()
            cy.add_conta()
            cy.movimentar_conta()

            cy.xpath(loc.EXTRATO.EXCULIR).click()
            cy.get(loc.MENSAGEM.MENSAGEM_SUC).should('be.visible')
            
        })

})

describe("Teste de login sem acesso", ()=>{

        it("Login, sem usuário cadastrado", ()=>{

           cy.login_projeto_Erro()
        })
})





















