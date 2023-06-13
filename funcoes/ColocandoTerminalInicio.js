function ColocandoTerminalInicio(entrada) {
    let problemas = ['A3','A1',"A3''","A4'"]

    problemas.forEach(producaoProblematica => {//roda apenas nas producoes problematicas
        for (let posicao = 0; posicao < entrada[producaoProblematica].length; posicao++) {
            const elemento = entrada[producaoProblematica][posicao];
            let inicio,fim,producaoSubstituta
            
            if (elemento.charAt(0) === "A") { 
                                                 
                inicio = entrada[producaoProblematica].slice(0,posicao)
                // corta em duas seções
                fim = entrada[producaoProblematica].slice(posicao + 1)
                
                producaoSubstituta = elemento.substring(0,2) // pega quem vai substituir
                let inalterado = elemento.replace(producaoSubstituta,'')                    
                
                entrada[producaoSubstituta].forEach(
                    produiz => {
                        if (produiz === inalterado)
                            inicio.push(produiz)
                        else
                            inicio.push(produiz + inalterado)
                    }
                )
                entrada[producaoProblematica] = inicio = inicio.concat(fim)
                
                //Elimina redundancias
                entrada[producaoProblematica] = entrada[producaoProblematica].filter((elemento, posicao) => {
                    return entrada[producaoProblematica].indexOf(elemento) === posicao;
                }); 
            }                  
        }
    })    
}

globalThis.ColocandoTerminalInicio = ColocandoTerminalInicio