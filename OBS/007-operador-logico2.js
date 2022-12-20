


/*

    - O Operador lógico || é conhecido também com OR
    - Ele retona true casa uma das operações retorne verdadeiro
    - O OR retorna false apenas se as duas expressões são falsas

*/

var idade = 13
var nome = "Pedro"

if(nome == "Pedro" || idade > 14 ) {
    console.log("Pode entrar na aula de esgrima")
} else {
    console.log("Não pode entrar na aula de esgrima")
}

if(nome == "Pedro" && 15 > 20 || 10 == 10) {
    console.log("testando")
}