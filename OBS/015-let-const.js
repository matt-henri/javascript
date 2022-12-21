let x = 5

const y = 10

x = 12

console.log("escopo global é " + x)

if(true) {
    let x = 20
    console.log("no escopo local é " + x)

    const y = 50
    console.log("no escopo local é " + y)
}

console.log("no escopo global permanece " + x)


// pode reatibuir o valor no escopo local,
// mas o valor no escopo global continua o mesmo