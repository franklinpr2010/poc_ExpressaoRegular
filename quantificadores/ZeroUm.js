const texto1 = 'De longe eu avistei o fogo foga e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// ? -> zero ou um (opcional) - pode ter zero ou uma ocorrência do simbolo que está antes da interrogação
const regex = /fogo?/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))