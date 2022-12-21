 

 //    length
 // apresenta no número de caracteres dentro da string

 var nome = "Mateus"
 console.log(nome.length)

 var obj = "bola"
 console.log(obj.length)

 //    indexOf
 // identifica a posição especifica determinada

 var frase = "O rato roeu a roupa do rei de Roma"
 console.log(frase.indexOf("roeu"))

//    slice
// pode extrair algo especifico

var roeu = frase.slice(7, 11)
console.log(roeu)

//    replace
// pode substituir algo especifico

var novaFrase = frase.replace("roeu", "comeu")
console.log(novaFrase)