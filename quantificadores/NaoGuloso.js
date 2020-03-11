const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

//'.' que quer dizer qualquer coisa, '+', pode ter um ou mais caracteres no meio e após vai fechar a tag 'div'
console.log(texto.match(/<div>.+<\/div>/g))

console.log(texto.match(/<div>.*<\/div>/g))

console.log(texto.match(/<div>.{0,100}<\/div>/g))

// quantificadores NÃO gulosos (lazy)...
console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))