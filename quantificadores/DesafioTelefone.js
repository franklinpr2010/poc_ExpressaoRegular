const texto = `
Lista telefônica:
    - (11) 98756-1212
    -98765-4321
    - (85) 99988-7766
    - (2)3261-8899
`

//vai colocar o '\' depois o parenteses e dizer que ele é opcional, depois vai colocar um conjunto de números que 
//vai de 0 a 2, depois vai fechar com o parenteses e dizer que ele é opcional
// após vai ter um espaço opcional que é o '\s?', após vai ser um '\d' entre 4 e 5.
//após vai adicionar um traço com 4 digitos
console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g))