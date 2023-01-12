let altura = 1.73
let peso = 85

let imc = (peso / (altura*altura)).toFixed(1)

if ( imc > 18.5 || imc < 24.9 ) {
    console.log (`Seu IMC é de ${imc}, vc esta no peso ideal.`)
} else if ( imc > 25 || imc < 29.9 ) {
    console.log (`Seu IMC é de ${imc}, você esta acima do peso.`)
} else { 
    console.log ('vc esta obeso')
}