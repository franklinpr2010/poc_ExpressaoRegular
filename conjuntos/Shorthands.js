const texto = `1,2,3,4,5,6,a.b c!d?e\r	-
f_g`

//vai pegar dentro do texto todos os dígitos
console.log(texto.match(/\d/g)) // números [0-9]
//vai obter todos os não dígitos.
console.log(texto.match(/\D/g)) // não números [^0-9]
//corresponde a letras, números e underline
console.log(texto.match(/\w/g)) // caracteres [a-zA-Z0-9_]
//Tudo aquilo que não é letras, números e underline
console.log(texto.match(/\W/g)) // não caracteres [^a-zA-Z0-9_]
//Espaços em branco, o tab entra e o caractere de '\n' - nova linha
console.log(texto.match(/\s/g)) // espaço [ \t\n\r\f]
//Tudo o que não é espaço trouxe no console
console.log(texto.match(/\S/g)) // não espaço [^ \t\n\r\f]

// \b \B