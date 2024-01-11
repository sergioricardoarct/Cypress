/// <reference types="cypress" />

describe("Testes_API",()=>{

      
        
/// Login e Usuario Pre cadastrado - Pre condiçoes ///
        it("Login", ()=>{
        cy.request({
                method: 'POST',
                url:'https://barrigarest.wcaquino.me/signin',
                body:{
                        email:"RamisesMenotep@egt.com",
                        redirecionar: false,
                        senha:"Ameno123"
                }
                       
                })
                .then(res => console.log(res) ).its('body.token').should('not.be.empty')
                .then(token => {
                        cy.request(
                                {method:'POST',
                                url:'https://barrigarest.wcaquino.me/contas',
                                headers:{Authorization: `JWT ${token}`},       //// aqui é crase///
                                body:{nome:'Conta via Post'},
                                },
                        )
                        .then(res=>console.log(res))
                        .as("response")
                })

                cy.get("@response").then(resp=>{
                        expect(resp.status).to.be.equal(201)
                        expect(resp.body).to.be.have.property('id')
                        expect(resp.body).to.be.have.property('nome','Conta via Post')
                })
        })
        

/// Caso de teste 1 - Inserir uma conta ///
    
        it("Cricar uma conta", ()=>{
                

        })

/// Caso de teste 2 - Alterando uma conta ///

        it("Alteração de conta", ()=>{ })         
    
/// Caso de teste 3 - Tentar criar uma conta repetida ///

        it("Repetir conta",()=>{ })         

///Caso de teste 4 - Inserir Movientação ///

        it("Inserir Movientação", ()=>{})

///Caso de teste 5 - Saldo da Movientação /// 

        it("Saldo", ()=>{ })

///Caso de teste 6 - Deletar Movimentação /// 

        it("Remover Movimentação", ()=>{ })

})






















