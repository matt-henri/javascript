let amigo = {
    nome: 'Jose',
    peso: 84.2,
    sexo: 'M',
    engordar(p=0) {
        this.peso += p
    }
}

console.log(amigo)


amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)