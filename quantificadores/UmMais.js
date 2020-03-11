const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'
// + -> um ou mais, fog  não vai ser selecionado porque não contem a letra o
const regex = /fogo+/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))
const texto3 = 'Os números: 0123456789.'
console.log(texto3.match(/[0-9]/g))
//ele vai trazer um número como um todo, todos os elementos juntos
console.log(texto3.match(/[0-9]+/g))