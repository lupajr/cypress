it('sem testes', ()=>{ })

   /* const getAlgo = callback =>{
        setTimeout(()=>{
            
            callback(13)  //metodo callback para assincrono
        },1000)
    }
    */
    const getAlgo = () =>{
        return new Promise((resolve, reject )=>{
            
            setTimeout(()=>{
                resolve(13)
            },1000)
        })
       
    }

    const system = () =>{
        
        console.log('init')
        getAlgo().then(algo =>{
            console.log(`algo é ${algo}`)
            console.log('final')
        })
           
            
        
    }
    
    system();