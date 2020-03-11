const texto = `
Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com
`
//vai pegar de 'a' minúsculo a 'z' minúsculo de [A-Z] e '0' a '9', '+' um ou mais, precedido de '@'
console.log(texto.match(/[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]{2,4}/g))
// '\w' shorthand de 'a' a 'z' e '0' a '9', logo após um '.' literal e após um shorthand de 2 a 4
console.log(texto.match(/\w+@\w+\.\w{2,4}/g))
//vai colocar um grupo que vai ter um shorthands de caracteres mais o ponto, vai colocar o '+' para ter 
//vários caracteres agrupados, após mais o @, após vai ter um ponto literal com scape '/.' e para finalizar
//Colocar um Shorthand de '\z{2,4}'
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}/g))
//maria_silva@registro.br '\w{2,4}\.?' opcional e no final '\w{0,2}' representando o 'br'
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))

console.log(texto.match(/[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g))