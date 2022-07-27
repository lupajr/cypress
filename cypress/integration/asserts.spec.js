/// <reference types="cypress"/>


it('igualdade',()=>{
    const a =1

    expect(a,'deve ser 1').equal(1)
    expect(a).to.be.equal(1)
    expect('a').not.to.be.equal('b')
    describe('erro',()=>{
        expect(a,'deveria ser 1').equal(2)
       
    })
})
describe('verdadeiro/falso',()=>{
    it('verdadeiro',()=>{
        const a = true
        expect(a).to.be.true
    })
})
