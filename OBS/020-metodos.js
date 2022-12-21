let pessoa = {
    nome: "Mateus",
    idade: 27,
    falar: function() {
        console.log("olá, tudo bem?")
    },
    soma: function(a, b) {
        return a + b
    }
}

console.log(pessoa.nome)
console.log(pessoa.idade)
pessoa.falar()

var soma = pessoa.soma(2, 2)
console.log(soma)