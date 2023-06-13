function RetirandoRecursõesEsquerda(entrada){   
    //adequando A2 ----------
    let problema = entrada.A2.shift() // retiro problema e quarda o resto
    problema = problema.replace('A2','')
    Object.assign(entrada,{ // cria nova variavel
        "A2'":[problema, problema+"A2'"]
    })
    entrada.A2.push(entrada.A2[0]+"A2'") // caso especial    

    //adequando A3 ----------- 
    problema = entrada.A3.shift() 
    problema = problema.replace('A3','')
    Object.assign(entrada,{
        "A3'":[problema, problema+"A3'"]
    })
    
    problema = entrada.A3.shift() 
    problema = problema.replace('A3','')
    Object.assign(entrada,{
        "A3''":[problema, problema+"A3''"]
    })    
    entrada.A3 = entrada["A3''"]

    //adequando A4 -------------------      
    problema = entrada.A4.shift() 
    problema = problema.replace('A4','')
    Object.assign(entrada,{
        "A4'":[problema, problema+"A4'"]
    }) 

    entrada["A4'"].shift() // resolvendo derivação menor para maior A4'  
    entrada.A3.reverse().forEach(produiz => entrada["A4'"].unshift(produiz))    

    problema = entrada["A4'"].pop() // resolvendo derivação menor para maior A4'
    problema = problema.replace('A3','')
    entrada.A3.reverse().forEach(produiz => entrada["A4'"].push(produiz+problema))  


    problema = entrada.A4.shift()
    problema = problema.replace('A4','')
    Object.assign(entrada,{ 
        "A4''":[problema, problema+"A4''"]
    })  
    entrada.A4.push(entrada.A4[0]+"A4''") // caso especial
    
    entrada["A4''"].shift() // resolvendo derivação menor para maior A4''
    entrada.A2.reverse().forEach(produiz => entrada["A4''"].unshift(produiz))    
    
    problema = entrada["A4''"].pop() // resolvendo derivação menor para maior A4''
    problema = problema.replace('A2','')
    entrada.A2.reverse().forEach(produiz => entrada["A4''"].push(produiz+problema))    
}

globalThis.RetirandoRecursõesEsquerda = RetirandoRecursõesEsquerda