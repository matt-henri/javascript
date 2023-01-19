function notaRes(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

notaRes(6.2)
notaRes(8.4)


//      -------  -----  ----- -----


function parImpar(n) {
    if(n%2==0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let res = parImpar(11)

console.log(res)