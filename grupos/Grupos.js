const texto1 = 'O José Simão é muito engraçado... hehehehehehe'
//agrupando um quantificador de um ou mais
console.log(texto1.match(/(he)+/g))
const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag'
//criou um grupo o // precisa ter um escape, o www vem seguido de um ponto literal, então coloca um escape 
// o (www\.)? torna um grupo opcional, depois abriu um quantificador .\w{2,} de dois a qualquer coisa
//no final (\.\w{2})? um grupo de 2 caracteres 
console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))