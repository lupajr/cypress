/// <reference types="cypress"/> 

describe('Helpers',()=>{
    it('wrap',()=>{
        const obj = {nome: 'alessandro', idade: 60}           //criando um objeto

        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property','nome')         // wrap encapsula o objeto p usar com should


        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').then($el =>{    
            cy.wrap($el).type('joaozinho da silva')
           // $el.val('aqui da sum')                      // printando usando Jquery
        })
        
    })  
})