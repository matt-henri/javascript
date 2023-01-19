Number.prototype.entre = function ( inicio, fim ) { 
    return this >= inicio && this <= fim
}

const imprimirResultado = function ( nota ) {
    if (nota.entre(7, 10)) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(8)