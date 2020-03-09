// g - global
// i - ignore case

const texto = 'Carlos assinou o abaixo-assinado.'
//Vai procurar letra C maiúsculo ou letra ab
console.log(texto.match(/C|ab/))
//Vai procurar letra c minúsculo ou letra ab - Flag i (Fora da expressão regular) - i (case sensitive)
console.log(texto.match(/c|ab/i))
//Vai procurar letra ab minúsculo ou letra c - Flag i (Fora da expressão regular) - i (case sensitive) - g (Global - vai procurar
//até achar todas as ocorrências)
console.log(texto.match(/ab|c/gi))