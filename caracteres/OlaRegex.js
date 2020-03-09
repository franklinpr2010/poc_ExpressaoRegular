const texto = 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.'
//Vai armazenar uma expressão regular em texto e vai passar flags
//Vai passar uma flag g de forma global e i case-insensitive
const regex = /casa/gi
//
console.log(texto.match(regex))
//procurando a espaço b
console.log(texto.match(/a b/))
console.log(texto.match(/a c/))