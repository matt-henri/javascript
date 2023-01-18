const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

// modo não resumido



const res = function(notas) {
    if (notas <= 7) {
        return 'reprovado'
    } else {
        return 'aprovado'
    }
}

console.log(res(9))

