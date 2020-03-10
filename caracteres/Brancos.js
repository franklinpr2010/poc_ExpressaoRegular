const texto = `
ca	r
r	o s!
`
//ca com '\t' (tab), (Depois um r), continua colocando um '\n' (nova linha) e um 'r' após vem um '\t' (tab) depois vem a letra o
//depois vem um espaço '\s' e no final tem um 's' com uma exclamação '!' 
console.log(texto.match(/ca\tr\nr\to\ss!/))