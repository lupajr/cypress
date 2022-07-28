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
        const b = null
        let c 
        
        expect(a).to.be.true
        expect(true).to.be.true
        expect(b).to.be.null
        expect(a).to.be.not.null
        expect(c).to.be.undefined

    })


})


describe('igualdade de objeto',()=>{
    it('igualdade de objeto',()=>{
        const ob = {
            a:1,
            b:2,      
            c:0                               //objeto em JS se coloca em {}
        }

        expect(ob).equals(ob)             
        expect(ob).deep.equal({a:1,b:2,c:0})   // checando se o objeto é igual
        expect(ob).eqls({a:1,b:2,c:0})         // maneira simplificada 
        expect(ob).include({a:1})          // verificando se esta incluso
        expect(ob).to.have.property('b',2) // verificando propriedade
        expect(ob).to.not.be.empty         // vendo se esta vazio
        expect({}).to.be.empty
        

    })
})

describe('array',()=>{
    let lista = [1,2,3,4]
    expect(lista).to.have.members([1,2,3,4])
    expect(lista).include.members([1,3])
    expect([]).to.be.empty
})

describe('tipos',()=>{
    it('tipos',()=>{
        let num = 1
        let str = "string"

        expect(num).to.be.a("Number")
        expect(str).to.be.a('String')
        expect({}).to.be.an('Object')
        expect([]).to.be.an('array')
    })
})


describe('String',()=>{
    it('string',()=>{
        let str ='teste'

        expect(str).eqls('teste')
        expect(str).to.have.length(5) //checando tamanho da string]
        expect(str).to.contains('te') // verificar se parte da string existe
        expect(str).to.match(/^te/)

    })
})