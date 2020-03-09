const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'
//
const regexNove = RegExp('9')
console.log('Métodos da RegExp...')
//O metodo test vai retornar true ou false. Daí passa um texto para dizer se o padrão da expressão regular está presente ou não
//no texto que está sendo passado no metodo teste
console.log(regexNove.test(texto))
console.log(regexNove.exec(texto))

const regexLetras = /[a-f]/g
//console.log('Métodos da string...')
//console.log(texto.match(regexLetras))
//console.log(texto.search(regexLetras))
//console.log(texto.replace(regexLetras, 'Achei'))
//console.log(texto.split(regexLetras))