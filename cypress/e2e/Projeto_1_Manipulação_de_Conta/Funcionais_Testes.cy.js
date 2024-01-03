/// <reference types="cypress" />
import loc from "../../support/locators"

describe ("Testes_Funcionais",()=>{

    before(()=>{
        cy.visit('https://barrigareact.wcaquino.me')

        cy.get(loc.LOGIN.USER).type("RamisesMenotep@egt.com")
        cy.get(loc.LOGIN.PASSWORD).type ("Ameno123")  
        cy.get(loc.LOGIN.BTN_LOGIN).click()
        
        cy.get('.toast-message').should("contain", "Bem vindo")
    })
    
        it("Page loaded", ()=>{cy.get('img').should("be.visible")})
        
        
        /// Login e Usuario Pre cadastrado - Pre condiçoes ///

        it("No login, no user registered", ()=>{

            cy.get(loc.LOGIN.USER).type("RamisesMenotep@egt.com")
            cy.get(loc.LOGIN.PASSWORD).type ("Ameno123")  
            cy.get(loc.LOGIN.BTN_LOGIN).click()
            
            cy.get('.toast-message').should("contain", "Erro")
        })

        it("register", ()=>{

            cy.get(':nth-child(2) > .nav-link').click()
            cy.get('.jumbotron > :nth-child(1) > .form-control').type("Ramises Menotep VI")
            cy.get('.input-group > .form-control').type("RamisesMenotep@egt.com")
            cy.get(':nth-child(3) > .form-control').type ("Ameno123")  
            cy.get('.btn').click()
            
            cy.get('.toast-message').should("be.visible")
        })
        
        it("login, valid", ()=>{

            cy.get('[data-test="email"]').type("RamisesMenotep@egt.com")
            cy.get('[data-test="passwd"]').type ("Ameno123")  
            cy.get('.btn').click()
            
            cy.get('.toast-message').should("contain", "Bem vindo")
        })

        /// Caso de teste 1 - Inserir uma conta ///
    
        it("Creat an account", ()=>{

            cy.get('[data-test="menu-settings"]').click()
            cy.get('[href="/contas"]').click()
            cy.get('[data-test="nome"]'). type("Construction of Dad's Primanede")
            cy.get('.btn').click()

            cy.get('.toast-success > .toast-message').should("contain", "Conta inserida com sucesso!")
            cy.get('[data-test="menu-home"] > .fas').click()
        })

        /// Caso de teste 2 - Alterando uma conta ///

        it.only ("alter an account", ()=>{

            cy.get('[data-test="menu-settings"]').click()
            cy.get('[href="/reset"]').click()
            cy.get('[data-test="menu-settings"]').click()
            cy.get('[href="/contas"]').click()
            cy.get('[data-test="nome"]'). type("Construction of Dad's Primanede")
            cy.get('.btn').click()
            cy.get(':nth-child(7) > :nth-child(2) > :nth-child(1) > .far').click()
            cy.get('[data-test="nome"]').clear()
            cy.get('[data-test="nome"]').type("Construction of Dad's Primanede 1")
            cy.get('.btn').click()

            cy.get('.toast-success > .toast-message').should("contain", "Conta atualizada com sucesso!")
            cy.get(':nth-child(7) > :nth-child(1)').should("contain","Construction of Dad's Primanede 1")
           
        })


       






















})