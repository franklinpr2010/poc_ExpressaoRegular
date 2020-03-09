const textoUmaLinha = '...' // aspas simples ou duplas
/**
 * Se tiver uma string de multiplas linhas delimita com crase
 */
const textoMultiLinha = `
    linha 1
    linha 2
`

// Cuidado com o tab!
// Vai mostrar os espaços que tem dentro da string 
console.log('	'.match(/\s/g))