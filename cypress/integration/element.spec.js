/// <reference types ="cypress"/>



describe('elementos basicos',() =>{

    beforeEach(()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')        
    })                                                                      

    
    it('texto', ()=> {  
        
        cy.get('span')                  // utiliza jquery pra pegar um determinado elemento
        .should('contain',"Cuidado")

        
    })

    it.skip('teste teste',()=>{
        cy.get('body')                          //vai dar errado por nao existir 'was' no body  
        .should('contain','was')
    
    })

    it('texto usando css pra procurar',()=>{
        cy.get('.facilAchar')
        .should('contain','Cuidado')
    })



    it('usando have text pra procurar frase',()=>{
        cy.get('.facilAchar')
        .should('have.text', 'Cuidado onde clica, muitas armadilhas...')       //so aceita frase completa  
    })


    describe('testando links',()=>{

        
        it('link',()=>{
            cy.reload
            cy.get('[href="#"]')
            .click()          
            cy.get('#resultado')
            .should('have.text','Voltou!')
        })


    })

    describe('testando links usando contains e reload',()=>{
        it('contains/ reload',()=>{
            cy.reload()             //refresh na pagina
            cy.get('#resultado')
            .should('have.not.text','Voltou!')
            
            cy.contains('Voltar')
            .click()
            
            cy.get('#resultado')
            .should('have.text','Voltou!')
        })

    })
})