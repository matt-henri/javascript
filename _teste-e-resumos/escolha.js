let nome = "mateus"
var salario = 1250
var dependentes = 7

if (dependentes <= 0) {
    console.log(salario + (salario*5)/100)
} else if (dependentes <= 1 || dependentes <= 3) {
    console.log(salario + ((salario*10)/100))
} else if ( dependentes <= 4 || dependentes <= 6) {
    console.log(salario + ((salario*15)/100))
} else {
    console.log(salario + ((salario*18)/100))
}
