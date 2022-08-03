/// <reference types = "cypress"/>



describe('testand caixa de texto', ()=>{
    before(()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
    it('testando campo nome',()=>{
        cy.get('#formNome')
        .type('aquele da silva') //type pra escrever
       
    })

    it('validando se o nome é igual',()=>{
        cy.get('#formNome').should('have.value','aquele da silva')    //pra strings usando 'type' tem q usar have.value
    })

    it('populando campo sugestao',()=>{
        cy.get('#elementosForm\\:sugestoes')                            // cypress n reconhece " : " pra entender tem q usar \\
        .type('deveria ter mais isso aqui e isso tambem')
    })
    it('populando campo input francisco',()=>{
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type('putz do ceu')
    })

    it('poulando campo sobrenome',()=>{
        cy.get('[data-cy=dataSobrenome]')
        .type('junior or{backspace}{backspace}')
    })
    
    it('apagando campo sugestao',()=>{
        cy.get('#elementosForm\\:sugestoes')
        .clear()                            
        .type('foi limpo o campo')
    })
})