it ('por enquantoo nada',function(){

})

/*function soma (a, b){
    return a + b;
} 


const soma = function(a, b){        Vai necessitar do return
    return a + b;
}
*/


//const soma = (a,b) => a + b       Nao precisa do return

//0const soma = a => a + a

let soma = () => 5 + 3

console.log(soma(1,5));




it('Arrow test',()=>{
    console.log('Arrow', this)
})