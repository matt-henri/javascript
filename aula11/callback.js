const dobrar = numero => {
    return numero * numero
}

console.log(dobrar(5))



let a = 5
let b = 10

let c = (num1, num2) => num1 + num2

console.log(c(a,b))

let d = (x, y) => {

    let op
    if (x >= 5) {
        op = x * y
    } else {
        op = y + x
    }

    return op
}

console.log (d(a,b))