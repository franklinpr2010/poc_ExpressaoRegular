import re

texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

pattern9 = re.compile('9')
match1 = re.search(pattern9, texto)
# start() - indice de início onde achou um determinado elemento.
# end() - indice final de determinado elemento
# group(0) - vai pegar o elemento que foi encontrado na busca
print "Posicoes: %s, %s; Valor: %s." % (match1.start(), match1.end(), match1.group(0))

# vai pegar todas as ocorrências de uma expressão dentro de um texto.
valores = re.findall('[a-f]', texto)
print "Valores: %s" % valores