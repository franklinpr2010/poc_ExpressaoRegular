const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexVirgula = /,/
//Vai quebrar o texto tirando as virgulas e para cada vez que ele encontra vírgula gera um novo elemento.
console.log(texto.split(regexVirgula))
//vai achar a vírgula no índice 1, 
console.log(texto.match(regexVirgula))
//Vai achar 6 virgulas, colocou a flag global achou todas
console.log(texto.match(/,/g))
//Vai achar a letra A, mas é case sensitive
console.log(texto.match(/A/g))
//Vai achar a letra A
console.log(texto.match(/A/gi))
console.log(texto.match(/2/g))
//vai colocar b c!d, se tiver esse texto ele vai encontrar
console.log(texto.match(/b c!d/))