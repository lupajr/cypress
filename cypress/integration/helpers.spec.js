/// <reference types="cypress"/> 

describe('Helpers',()=>{
    it('wrap',()=>{
        const obj = {nome: 'alessandro', idade: 60}           //criando um objeto

        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property','nome')         // wrap encapsula o objeto p usar com should


        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').then($el =>{    
            cy.wrap($el).type('joaozinho da silva')
           // $el.val('aqui da sim')                      // printando usando Jquery
        })
        

        
    })  
    describe('algo',()=>{
        it('its',()=>{
            let obj = {nome:'carlo',idade: 22}
            cy.wrap(obj).should('have.property', 'nome')
            cy.wrap(obj).its('nome').should('be.equal','carlo')

            let obj2 = {nome:'carlo',idade: 22, endereco:{rua:'dos aes'}}

            cy.wrap(obj2).its('endereco').should('have.property','rua')         //verificando se existe rua dentro de obj2
            cy.wrap(obj2).its('endereco.rua').should('contain','dos')
           })   
    })

    it.only('invoke',()=>{
        const getValue = ()=> 1
        let soma =(a,b) => a+b
        cy.wrap({fn:getValue}).invoke('fn').should('be.equal',1)    
        cy.wrap({fm:soma}).invoke('fm', 2, 5).should('be.equal', 7)  //colocando parametros

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').invoke('val','texto via invoke')            //printar usando invoke e jquery
        cy.window().invoke('alert','meodeu')

    })  

})