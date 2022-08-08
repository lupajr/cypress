/// <reference types = 'cypress'/>


describe('should x then',()=>{

    it('testando metodo should',()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html') 
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').should('have.length', 1)
    })

    it('testando metodo then',()=>{
        cy.reload()
        cy.get('#buttonListDOM').then($el =>{
            expect($el).to.have.length(1)
        cy.get('#buttonList')    
        })
        
               
    })
})