function AjustandoVazio(entrada) {
    // Removendo cadeias com produções vazio em S ----------------
    let novoS = [].concat(entrada['S'])
    
    novoS.shift() // remove a primeira producao    
    novoS = novoS.map(producao => producao.replace('A',''))
    novoS = novoS.map(producao => producao.replace('A',''))//remove os A(s)

    //Compensação dos vazios    
    novoS.push('Ab','bA')
    entrada.S = entrada.S.concat(novoS)

    
    // Removendo cadeias com produções vazio em A ---------------
    entrada['A'].pop() //remove vazio

    let novoA = [].concat(entrada['A'])    
    novoA = novoA.map(producao => producao.replace('A',''))// Remove os A(s)
       
    entrada.A = entrada.A.concat(novoA)   
    
    // Removendo cadeias com produções vazio em C ---------------

    let novoC = [].concat(entrada['C'])    
    novoC = novoC[1].replace('A','')// Remove os A(s)
    
    entrada.C = entrada.C.concat(novoC)
    
}

function RemovendoUnitarios(entrada) {
    //Unitarios em S
    let novoS = [].concat(entrada['A'])
    entrada.S.shift() // remove producao A em S
   
    novoS = novoS.concat(entrada.S)
    entrada.S = novoS   

    //Unitarios em C    
    entrada.C.pop() // remove redundancia em C (C => C)
    
}

globalThis.SimplificandoGramatica = {AjustandoVazio,RemovendoUnitarios}
