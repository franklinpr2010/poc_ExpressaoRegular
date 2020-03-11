const texto = '1,2,3,a.b c!d?e[f'

//pega exatamente aquilo que não é dígito, tudo que não é 0-9 ele pega
console.log(texto.match(/\D/g))
//negação de 0 ate 9, tudo que não é zero e 9
console.log(texto.match(/[^0-9]/g))
//tudo que não é digito, exclamação, interrogação, virgula, ponto, nem espaço em branco
console.log(texto.match(/[^\d!\?\[\s,\.]/g))

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

//existem dois intervalos ai, do exclamação até o ':' e do dois ponto até o '@'
console.log(texto2.match(/[^!-/:-@\s]/g))