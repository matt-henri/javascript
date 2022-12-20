


/*

    O Operador lógico ! é conhecido também como NOT
    - Este operador muda o valor que a expressão retornou
    - Se recebeu true vira false, se recebeu false vira true

*/

if(!true) {
    console.log("passou")
}

if(!false) {
    console.log("passou")
}

var nome = "Mateus"

if(!(nome == "Pedro")) {
    console.log("ok")
}
 