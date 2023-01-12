let altura = 1.73
let peso = 63

let imc = (peso / (altura*altura)).toFixed(1)

if ( imc <= 18) {
    console.log (`Seu IMC é de ${imc}, vc esta abaixo do peso ideal.`)
} else if ( imc < 25 ) {
    console.log (`Seu IMC é de ${imc}, você esta no peso ideia.`)
} else if ( imc < 30 ) {
    console.log (`Seu IMC é de ${imc}, você esta levemente acima do peso.`)
} else {
    console.log (`Seu IMC é de ${imc}, você esta acima do peso.`)
}