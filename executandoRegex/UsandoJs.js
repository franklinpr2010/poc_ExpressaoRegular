const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'
//
const regexNove = RegExp('9')
console.log('Métodos da RegExp...')
//O metodo test vai retornar true ou false. Daí passa um texto para dizer se o padrão da expressão regular está presente ou não
//no texto que está sendo passado no metodo teste
console.log(regexNove.test(texto))
console.log(regexNove.exec(texto))
//vai pegar todas as letras entre a e f
const regexLetras = /[a-f]/g
console.log('Métodos da string...')
//vai encontrar as letras a,b,c,e,f
console.log(texto.match(regexLetras))
//Vai pegar o primeiro elemento e todos os outros do indice 20 ( primeiro elemento ) até o final
console.log(texto.search(regexLetras))
//vai substituir o elemento que encontrou na regex pelo elemento de algum outro texto, a,b,c,d,e vai ser substituído 
console.log(texto.replace(regexLetras, 'Achei'))
//vai dar um split de tudo que bateu com a regex
console.log(texto.split(regexLetras))