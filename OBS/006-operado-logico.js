


/*

        - O Operador lógico && é conhecido também como AND
        - Ele vai retornar true apenas se as duas expressões retornarem true
        - Qualquer outro resultado o operador lógico and retornará false

*/



var idade = 16
var nome = "Pedro"

if (idade == 16 && nome == "Pedro") {
    console.log("Pedro está autorizado")
} else {
    console.log("Pessoa não autorizada")
}

if (idade > 15 && nome !== 'joao') {
    console.log("este é Pedro")
}