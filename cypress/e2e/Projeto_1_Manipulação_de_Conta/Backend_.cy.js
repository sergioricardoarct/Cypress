/// <reference types="cypress" />

describe("Testes_API",()=>{    
        let token
        before(()=>{
                cy.GetToken('RamisesMenotep@egt.com','Ameno123')
                .then(tkn => {token = tkn})               
        })

        beforeEach(()=>{
                {cy.ResetGet()}
        })
        
/// Caso de teste 1 - Inserir uma conta ///
        it("Criar conta", ()=>{
                cy.request(
                        {method:'POST',
                        url:'https://barrigarest.wcaquino.me/contas',
                        headers:{Authorization: `JWT ${token}`},       //// aqui é crase///
                        body:{nome:'Conta via Post'}
                        })
                        .then(res=>console.log(res))
                        .as("response")
                
                
                cy.get("@response").then(resp=>{
                        expect(resp.status).to.be.equal(201)
                        expect(resp.body).to.be.have.property('id')
                        expect(resp.body).to.be.have.property('nome','Conta via Post')
                })
        })   

/// Caso de teste 2 - Alterando uma conta ///

        it("Alteração de conta", ()=>{
                cy.request({
                        url:'https://barrigarest.wcaquino.me/contas',
                        method:'GET',
                        headers:{Authorization: `JWT ${token}`},
                        qs:{
                                nome:'Conta para alterar',
                        }
                }) .then(res=>console.log(res)) .then(res=>
                        cy.request({
                        url:`https://barrigarest.wcaquino.me/contas/${res.body[0].id}`, /// aqui na pesquisa são pontos///
                        method:"PUT",
                        headers:{Authorization: `JWT ${token}`},
                        body:{nome:"Conta alterada via rest" },
                })).as("response")
                        
                
                cy.get("@response").its("status").should("be.equal",200 )           
                })
                  
/// Caso de teste 3 - Tentar criar uma conta repetida ///

        it("Repetir conta",()=>{
                cy.request(
                        {method:'POST',
                        url:'https://barrigarest.wcaquino.me/contas',
                       // headers:{Authorization: `JWT ${token}`},       //// aqui é crase///
                        body:{nome:'Conta via Post'},
                        failOnStatusCode: false
                        })


                cy.request({
                        url: 'https://barrigarest.wcaquino.me/contas/',
                        method: 'POST',
                        // headers: { Authorization: `JWT ${token}` },
                        body: {
                            nome: 'Conta via Post'
                        },
                        failOnStatusCode: false
                    }).as('response')
            
                    cy.get('@response').then(res => {
                        expect(res.status).to.be.equal(401)
                    })

                
               
        })         

///Caso de teste 4 - Inserir Movientação ///

        it("Inserir Movientação", ()=>{
                cy.GetContaNome("Conta para movimentacoes")
                .then(contaId =>{
                        cy.request({
                                url: 'https://barrigarest.wcaquino.me/transacoes',
                                method: 'POST',
                                headers:{Authorization: `JWT ${token}`},
                                body:{
                                        conta_id:contaId,
                                        data_pagamento: "21/10/2023",
                                        data_transacao: "21/10/2023",
                                        descricao: "asdf",
                                        envolvido: "asd",
                                        status: true,
                                        tipo: "REC",
                                        valor: "321"}
                        })
                }). as("response")
                cy.get("@response").its("status").should("be.equal",201)
        })
        
///Caso de teste 5 - Saldo da Movientação /// 

        it("Saldo", ()=>{
                cy.request({
                        url: 'https://barrigarest.wcaquino.me/saldo',
                        method: 'GET',
                        headers:{Authorization: `JWT ${token}`},
                }).then(res=>{
                        let saldoConta = null
                        res.body.forEach ( 
                                c=>{ if(c.conta ==="Conta para saldo")
                                        saldoConta = c.saldo
                                })
                        expect(saldoConta).to.be.equal("534.00")
                })               
         })


///Caso de teste 6 - Deletar Movimentação /// 

        it.only("Remover Movimentação", ()=>{ 
                cy.request({
                        url: 'https://barrigarest.wcaquino.me/transacoes',
                        method: 'GET',
                        headers:{Authorization: `JWT ${token}`},
                        qs: {descrição:"Movimentacao para exclusao"},
                }).then(reps=>{
                                cy.request({
                                        url:`https://barrigarest.wcaquino.me/transacoes/${reps.body[0].id}`,
                                        method: 'DELETE',
                                        headers:{Authorization: `JWT ${token}`},
                        })
                }).its ("status").should("be.equal", 204)
        })
})
