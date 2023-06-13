function RenomeandoVariaveis(entrada) {
    //colocando variaveis renomeadas
    Object.assign(entrada, {
        A1:entrada.S,
        A2:entrada.A,
        A3:entrada.B,
        A4:entrada.C,
    })
    
    //retirando as antigas    
    delete entrada.S; delete entrada.A; delete entrada.B; delete entrada.C

    // navegando pelas derivações e renomeando as produções
    let aux = []
    Object.getOwnPropertyNames(entrada).forEach(producao => {

        aux = Object.getOwnPropertyDescriptor(entrada,producao).value.map(
            termo => {
                termo = termo.replaceAll('S','A1')
                termo = termo.replaceAll('A','A2')
                termo = termo.replaceAll('B','A3')           
                termo = termo.replaceAll('C','A4')
                return termo                     
        })        
        Object.defineProperty(entrada,producao,{value:aux})
    })    
}

globalThis.RenomeandoVariaveis = RenomeandoVariaveis