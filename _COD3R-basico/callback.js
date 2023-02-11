const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))


const marcas =  ['iphone', 'samsung', 'motorola']

function check(name, indic) {
    console.log(`${indic + 1}. ${name}`)
}

marcas.forEach(check)
marcas.forEach(marcas => console.log(marcas))