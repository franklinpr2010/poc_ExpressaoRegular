const texto = 'supermercado hipermercado minimercado mercado'
//vai criar um grupo que vai ter a palavra super ou hiper ou mini, esse vai ser um grupo opcional
//vai terminar com o mercado que a palavra mercado não é opcional
console.log(texto.match(/(super|hiper|mini)?mercado/g))
//criou um grupo dentro de outro grupo
console.log(texto.match(/((hi|su)per|mini)?mercado/g))