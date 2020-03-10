const texto = '1,2,3,4,5,6,a.b c!d?e[f'

// para definir uma classe (ou conjunto) de caracteres usa []
//números pares 2,4,6,8 ele vai achar
const regexPares = /[02468]/g
console.log(texto.match(regexPares))

const texto2 = 'João não vai passear na moto.'
//n com o a sem o til e com o til
const regexComESemAcento = /n[aã]/g
console.log(texto2.match(regexComESemAcento))