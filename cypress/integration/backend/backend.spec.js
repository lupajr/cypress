/// <reference types="cypress"/>

describe('Validando Back-end da Aplicaçao',()=>{


    it('Testando login',()=>{
        cy.request({
            method:"POST",
            url:"https://barrigareact.wcaquino.me/login",
            
        })
    })
})