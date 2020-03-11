const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'


// FORMA GULOSA
// '.' que quer dizer qualquer coisa, '+', pode ter um ou mais caracteres no meio e após vai fechar a tag 'div'
// vai selecionar os dois 'divs' 
console.log(texto.match(/<div>.+<\/div>/g))
//'*' o comportamento vai ser o mesmo
console.log(texto.match(/<div>.*<\/div>/g))
//vai definir um range de 0..100, vai pegar de 0 a 100 caracteres dentro das divs
console.log(texto.match(/<div>.{0,100}<\/div>/g))

//FORMA NÃO GULOSA
//Colocando uma interrogação(operador lazy), seleciona as duas divs de forma independente.
console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))