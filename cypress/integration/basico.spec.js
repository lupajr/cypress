/// <reference types ="cypress"/>

describe('Basico de Cypress',()=>{
    
    it('acessando pagina e fazendo um assert no titulo ',()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        
        cy.title ()
            .should('be.equal','Campo de Treinamento') //estrutura padrao de assertivas (usando should ao inves de expect)
        
    
    
    })
        it('Clicando no botao "clique me" e escrevendo no campo nome ',()=>{
            cy.get('#buttonSimple')
            .click()
            .should('have.value','Obrigado!') //validando a interaçao apos o clique

            cy.get('#formNome')
            .type('joao')
            .should('have.value','joao')
            

        })
    
})


