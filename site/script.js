let imprimirResultado = ''

Object.getOwnPropertyNames(globalThis.resultadoGreibach).forEach(producao => {
    imprimirResultado += producao +' ⇒ '+ Object.getOwnPropertyDescriptor(globalThis.resultadoGreibach,producao).value.toString().replaceAll(',',' | ') + "\n"        
})

document.getElementById('resposta').innerText = imprimirResultado