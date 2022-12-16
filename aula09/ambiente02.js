let valores = [9,8,7,6,5,4,3,2,1]


// primeira opção
console.log(valores)


// segunda opção


for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor - ${valores[pos]}`)
}



// terceira opção

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 