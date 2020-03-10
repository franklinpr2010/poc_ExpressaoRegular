const texto = '1,2,3,4,5,6,a.b c!d?e[f'
//pegar o conjunto das letras de 'a' a 'z' com todas as letras e vai fazer uma match nessas letras
console.log(texto.match(/[a-z]/g))
//pegar as letras de 'b' a 'd' com todas as letras e vai fazer uma match nessas letras
console.log(texto.match(/[b-d]/g))
// vai pegar o intervalo entre 2 e 4.
console.log(texto.match(/[2-4]/g))
//A até Z (Maíusculo) e de 1 até 3
console.log(texto.match(/[A-Z1-3]/gi))