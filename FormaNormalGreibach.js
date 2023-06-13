// Cada etapa de Greibach esta em um arquivo separado na pasta funções
// Aqui importo cada um deles
// Eles executam em sequencia na função livreDeContexto_para_NormalGreibach()
const Ajustando_Vazio = globalThis.SimplificandoGramatica.AjustandoVazio
const Removendo_Unitarios = globalThis.SimplificandoGramatica.RemovendoUnitarios
const Renomeando_Variaveis = globalThis.RenomeandoVariaveis
const Retirando_Recursões_Esquerda = globalThis.RetirandoRecursõesEsquerda
const Colocando_Terminal_Inicio = globalThis.ColocandoTerminalInicio
const Terminal_Inicio_Restante_Variavel = globalThis.TerminalInicioRestanteVariavel

// PRODUÇÕES
const S = ['A','ABa','AbA']
const A = ['Aa','λ']
const B = ['Bb','BC']
const C = ['CB','CA','bB']

const entrada = {S,A,B,C}

livreDeContexto_para_NormalGreibach()
globalThis.resultadoGreibach = entrada

function livreDeContexto_para_NormalGreibach() {    
    Ajustando_Vazio(entrada)    
    Removendo_Unitarios(entrada)
    
    
    Renomeando_Variaveis(entrada)  
    Retirando_Recursões_Esquerda(entrada)
    Colocando_Terminal_Inicio(entrada)
    Terminal_Inicio_Restante_Variavel(entrada)      
}
