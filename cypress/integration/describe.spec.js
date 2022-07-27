/// <reference types="cypress"/>

it('teste externo', ()=>{

})



describe('teste de grupo', ()=>{  //describe é o teste mae(onde vao ficar outros testes)
    describe('teste mais especifico',()=>{
        it('teste bem interno',()=>{

        })
    })
    it.skip('teste interno',()=>{

    })
})