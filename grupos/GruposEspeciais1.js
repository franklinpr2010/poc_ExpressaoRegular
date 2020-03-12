//GRUPOS QUE OLHAM PARA FRENTE E NÃO PARA TRÁS.

const texto = 'João é calmo, mas no transito fica nervoso.'

//Vai pegar o texto com caracteres especiais, o '+', ele vai acabar quebrando
console.log(texto.match(/[\wÀ-ú]+/gi))

// (?=,) - quer que procure a frente da palavra, procure uma virgula na frente de uma palavra
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi))
// (?=\.) - a única palavra que tem um ponto na frente é a palavra nervoso
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi))
//?= - tudo para trás vai achar o anterior antes do ', mas' ---- Resultado: [ 'calmo' ]
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi))


console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi))
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))