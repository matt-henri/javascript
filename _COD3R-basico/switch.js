const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case  9:
            console.log('aprovado com honra')
            break
        case  8:
        case  7:
            console.log('aprovado')
            break
        case  6:
        case  5:
        case  4:
        case  3:
        case  2:
        case  1:
        case  0:
            console.log('reprovado')
            break
        default:
            console.log('nota inválida')
    }
}

imprimirResultado(7)