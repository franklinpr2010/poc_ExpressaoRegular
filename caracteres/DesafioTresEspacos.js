const texto = 'a   b'
console.log(texto.match(/a   b/))
console.log(texto.match(/a\s\s\sb/))

//
console.log(texto.match(/a\s+b/))
//quantificador {3} dizendo que tem três espaços literais 
console.log(texto.match(/a {3}b/))
//quantificador {3} dizendo que tem três espaços literais '\s'
console.log(texto.match(/a\s{3}b/))