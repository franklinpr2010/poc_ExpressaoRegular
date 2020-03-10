const texto = 'lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3'
//o ponto tem que ser usado como literal para o mp3 do inicio não aparecer
console.log(texto.match(/\.mp3/g))

//o w (representa um caractere), o + (representa um quantificador, um ou mais) e após o literal '\.mp3'
console.log(texto.match(/\w+\.mp3/g))