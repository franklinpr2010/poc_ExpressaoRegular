const texto = '.$+*?-'

//Dentro de um contexto de um conjunto não precisa colocar o escape para dizer que é literal
console.log(texto.match(/[+.?*$]./g)) // não precisa de escape dentro do conjunto

console.log(texto.match(/[$-?]/g)) // isso é um intervalo (range)

//demtro de um conjunto ele se comporta como um literal e não como qualquer caractere
console.log(texto.match(/[.]/g)) // isso é um intervalo (range)

// NÃO é um intervalo porque colocou um ESCAPE antes
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))

// pode precisar de escape dentro do conjunto: - [ ] ^