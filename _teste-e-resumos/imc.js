const peso = 64
const altura = 1.73

let calc = altura * 2
let calcFinal = ((peso/calc).toFixed(2))

if (calcFinal <= 18) {
    console.log (`seu peso imc é ${calcFinal}, esta abaixo do peso`)
}else if (calcFinal <= 25 ) {
    console.log(`seu imc é ${calcFinal}, parabéns, está no peso ideal`)
} else {
    console.log(`seu imc é de ${calcFinal}, vc está acima do peso`)
}
 