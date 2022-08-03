/// <reference types = 'cypress'/>

describe('radio button',()=>{
    before(()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
    it('radio button',()=>{
        cy.get('#formSexoMasc')
        .click()
        .should('be.checked')
    })

    it('checando de o botao feminino nao esta marcado',()=>{
        cy.get('#formSexoFem')
        .should('not.be.checked')
        
    })

    it('testando grupo front',()=>{
        cy.get("[name = 'formSexo']")
        .should('have.length', (2))
    })


    describe('testando checkbox',()=>{

        it('testando checkbox',()=>{
            cy.get('#formComidaCarne')
            .click()                            //so vai aparecer que foi checado se vc clicar nele ne 
            .should('be.checked')               // checando se esta clicado 

            cy.get('[name = formComidaFavorita]')
            .click({multiple: true})                        //clicar em mais de uma checkbox
        })
    })


    describe('Combo box',()=>{
        it('combo box',()=>{
            cy.get('[data-test=dataEscolaridade]')
            .select('2o grau completo')                             // pra usar no combo box, se usa select7
            .should('have.value','2graucomp')                          // no codigo html, o value ta diferente do select
            

            cy.get('[data-test=dataEscolaridade]')
            .select('1graucomp')                                //posso usar select tanto com o value quanto o id
        })


        it('testando combo box multiple ',()=>{
            cy.get('[data-testid=dataEsportes]')                   
            .select(['natacao','Corrida','Karate'])              //pra selecionar mais de um valor, tem q usar array
        })
    })
})