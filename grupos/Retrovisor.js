const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
//Quer capturar as tags de abertura, vai criar um grupo para capturar a parte interna da TAG
//dentro do grupo vai ter um shorthand '<(\w+)>', '.*', qualquer coisa que tiver dentro da TAG
//'<\/\1>' o valor que foi capturado no primeiro grupo vai ter que ser capturado aqui '\1'
console.log(texto1.match(/<(\w+)>.*<\/\1>/g))

const texto2 = 'Lentamente é mente muito lenta.'
//os dois grupos são obrigatórios, então ele colocou a palavra (lenta)(mente) dentro de um grupo
//'\2' está pegando o conteúdo do grupo 2 que é mente e após usando o '.*' para obter o restante do texto
//E após aplicando conteúdo do primeiro grupo '\1' e depois o ponto literal '\.'
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi))

//
console.log(texto2.match(/(?:lenta)(mente).*\1/gi)) 

console.log(texto2.match(/(lenta)(mente)/gi))
console.log(texto2.match(/(lenta)(mente)?/gi))
console.log(texto2.replace(/(lenta)(mente)/gi, '$2'))

const texto3 = 'abcdefghijkll'
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g))