// toLowerCase e toUpperCase
// Caixa baixa e Caixa alta

var frase = "Vamos modidicar esta frase."

var fraseCaps = frase.toUpperCase()

console.log(fraseCaps)

console.log(frase.toLowerCase())

// trim
// retira os espaços desnecessários

var nome = "      Mateus Henrique   "

var nomeTrim = nome.trim()

console.log(nome)
console.log(nomeTrim)

// split
// separa as palavras em string

var tags = "PHP, JavaScript, Java, HTML, CSS"
console.log(tags.split(", "))

// lastIndexOf
// localiza a ultima palavra especifica

var fraseDois = "Eu quero a última palavra teste desta frase de teste"

console.log(fraseDois.indexOf("teste"))
console.log(fraseDois.lastIndexOf("teste"))