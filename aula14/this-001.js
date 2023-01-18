
//           ---   this se refere ao proprio objeto   ---

let pessoa = {
    nome: 'Ana', 
    falar: function() {
        return `eu sou ${this.nome}`
    }
}

console.log(pessoa.falar())


let lugar = {
    cidade: 'Curitiba',
    local: function() {
        return `a cidade é ${this.cidade}`
    }
}

console.log(lugar.local())