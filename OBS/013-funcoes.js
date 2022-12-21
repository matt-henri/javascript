

/*

    - Funções são blocos de códigos reutilizáveis
    - Ou seja, evitamos a repetição da lógica de um programa em diversas partes do código
    - a função precisa ser invocada para ser executada

*/


function primeiraFuncao() {

    console.log("Hello World")

}

primeiraFuncao()

function dizerNome(nome) {
    console.log("O nome é: " + nome)
}

dizerNome("Mateus")
dizerNome("Pedro")
dizerNome("Marcos")

var nomeDoBancoDeDados = "Bruno"

dizerNome(nomeDoBancoDeDados)

function soma(a, b) {
    var soma = a + b
    return soma
}

var somaUm = soma(2, 6)
console.log(somaUm)

var somaDois = soma(5, 6)
console.log(somaDois)



let x = 15

function matt() {
    let teste = 5
    console.log(teste)
}

matt()

console.log("testando o let x = " + x)