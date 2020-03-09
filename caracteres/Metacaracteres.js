// . ? * + - ^ $ | [ ] { } ( ) \ :
const texto = '1,2,3,4,5,6,a.b c!d?e'
//Usando o ponto como o valor literal com ESCAPE ('\')
const regexPonto = /\./g
console.log(texto.split(regexPonto))

//Colocando a virgula que não é um metacaractere, Ou ( \| ), Ou ( \. ) Ou ( \? ) Ou (!) Ou / (Espaço)
// g - Flag Global vai achar todas as referencias desse texto
const regexSimbolos = /,|\.|\?|!| /g
//Quebrou todos os que tem o metacteres
console.log(texto.split(regexSimbolos))