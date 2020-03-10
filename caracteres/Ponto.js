// . é um coringa, válido para uma posição

const texto = '1,2,3,4,5,6,7,8,9,0'

//procurar '1.2', existe algo entre o '1' e o '2' que tenha qualquer caracteres
//console.log(texto.match(/1.2/g))
//
//console.log(texto.match(/1..2/g))
//entre 1 e a ',' tem dois caracteres que é 1 e 2
//console.log(texto.match(/1..,/g))
//
const notas = '8.3,7.1,8.8,10.0'
//Resolve o problema do ponto literal, no caso 8.3 e 8.8
console.log(notas.match(/8../g))
//Qualquer coisa dentro dessa string que tenha qualquer coisa ponto alguma coisa.
//Ponto (Metadado, qualquer caractere), um literal porque ('\.') e depois um metadado
//Resultado: [ '8.3', '8.8' ]
console.log(notas.match(/..\../g))
//Qualquer coisa dentro dessa string que tenha qualquer coisa ponto alguma coisa.
//2 Pontos (Metadado, qualquer caractere), um literal porque ('\.') e depois um metadado
//Resultado: [ ',7.1', ',8.8', '10.0' ]
console.log(notas.match(/..\../g))