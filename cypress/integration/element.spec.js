/// <reference types ="cypress"/>


describe('elementos basicos',() =>{

    it('texto', ()=> {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
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
})