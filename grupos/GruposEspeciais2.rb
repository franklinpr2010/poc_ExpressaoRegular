#GRUPOS QUE OLHAM PARA FRENTE E NÃO PARA TRÁS.

texto = 'supermercado superação hiperMERCADO Mercado'

#Vai pegar as palavras que começam com super, não é opcional depois tem letras com acento com uma ou mais ocorrências.
puts texto.scan(/(?:super)[\wÀ-ú]+/i).join(' ')

#qualquer palavra que tenha um prefixo da palavra super
puts texto.scan(/(?<=super)[\wÀ-ú]+/i).join(' ')

#quer dar match em mercado de algo que não está precedido da palavra super
puts texto.scan(/(?<!super)mercado/i)