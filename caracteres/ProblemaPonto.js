
//O '\n' não é resolvido no curinga
const texto = 'Bom\ndia'
//Se fosse o tab o ponto aceitaria
const texto2 = 'Bom\tdia'
//três caracteres qualquer
console.log(texto.match(/.../gi))
console.log(texto2.match(/.../gi))
//não existe quatro caracteres em sequencia, porque o '\n' não é resolvido pelo curinga
console.log(texto.match(/..../gi)) // o ponto não engloba o \n

// dotall - algums linguagens tem um flag /exp/s, mas JS não!