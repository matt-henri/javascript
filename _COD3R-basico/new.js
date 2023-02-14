function pessoa(nome, sobrenome) { 

    this.nome = nome
    this.sobrenome = sobrenome

    this.nomeCompleto = function () {
        return this.nome + ' ' + this.sobrenome
    }
}

var joao = new pessoa('joao', 'da silva')
console.log(joao.nomeCompleto())