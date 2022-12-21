

/* 

        - No JavaScript podemos ter vários escopos
        - O global, que é iniciado em toda a aplicação
        - E os locais, que podem existir em várias instruções como as funções

*/


// função global, pq a funçao não esta em nenhum parametro

var x = 1
var y = 2

console.log(x, y)

// escopo local, pois fica restrita dentro de uma função

function teste() {
    var z = 3
    console.log(z)
    console.log(x)
}
teste()


function testando() {
    var a = 4
    console.log(a)
}
testando()