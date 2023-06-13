function TerminalInicioRestanteVariavel(entrada) {
    let aux = []
    Object.assign(entrada,{
        B1:['a'],
        B2:['b']
    })

    // navegar pelas produções procurando terminais excluindo o primeiro
    Object.getOwnPropertyNames(entrada).forEach(producao => {
        aux = Object.getOwnPropertyDescriptor(entrada,producao).value.map(termo => {
            if (termo.length > 1) {
                let guardaLetra = termo.charAt(0)
                termo = termo.substring(1,termo.length)
                termo = termo.replace('a','B1')
                termo = termo.replace('b','B2')
                termo = guardaLetra + termo                           
            }            
            return termo            
        })
        Object.defineProperty(entrada,producao,{value:aux})
    })
}

globalThis.TerminalInicioRestanteVariavel = TerminalInicioRestanteVariavel