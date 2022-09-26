/// <reference types="cypress"/>

describe('usando commando criado ',()=>{

    it('Usando comando Click alert',()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.ClickAlert('#alert','Alert Simples')
    })
})