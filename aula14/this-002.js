const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

let cidade = {
    city: 'uberlandia',
    empresa: 'Algar Tech',
    local() {
        return `a empresa ${this.empresa} fica em ${this.city}`
    }
}

console.log(cidade.local())