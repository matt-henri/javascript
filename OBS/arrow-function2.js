function sum  (number1, number2) {
    return number1 + number2
}

console.log(sum(2, 4))

// incluindo a function em uma variável

const sumDois = function dois(num1, num2) {
    return num1 + num2
}

console.log(sumDois(4, 4))

// simplificando em ArrowFunction
// quando está simplificada, não tem a necessidade de usar 'Return'

const sumTres = (num1, num2) => num1 + num2
console.log(sumTres(3, 3))

// outro exemplo

const double = (number) => number * 2
console.log(double(8))