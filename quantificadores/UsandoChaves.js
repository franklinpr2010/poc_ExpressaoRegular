const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46 1200.'

// vai pegar números decimais e separar em 1 ou 2 dígitos, o 120 vira (12, 0) e o 1200 vira (12, 00) 
console.log(texto.match(/\d{1,2}/g))
//Vai pegar todos que tem 2 digitos
console.log(texto.match(/[0-9]{2}/g))
//vai pegar um ou mais números
console.log(texto.match(/\d{1,}/g))
//vai trazer as palavras que tem exatamente 7 dígitos. (õ não esta dentro do contexto do 'w')
console.log(texto.match(/\w{7}/g))
//colocou agora milhões dentro de um grupo que pertence
console.log(texto.match(/[\wõã]{7,}/g))


//vai colocar uma borda, um digito com um ou dois caracteres, mas que esses dígitos estão envolvidos por bordas
//ou seja só vai trazer número que tem um ou dois digitos
console.log(texto.match(/\b\d{1,2}\b/g))
console.log(texto.match(/\b[\wõ]{7}\b/g))