//Exemplo 1
//criei a variável alturas e dei valores a ela
let alturas = [1.70, 1.65, 1.75, 1.85, 1.60];

//criei a variável maiorQue170 e dei a ela o valor de uma função que agrega ultimo valor do Array que satisfaz a função
let maiorQue170 = alturas.findLast((altura) => altura > 1.70);

//criei um console.log para exibir o valor da variável maiorQue170
console.log(maiorQue170);

//Exemplo 2
//criei a variável comprimentos e dei valores a ela
let comprimentos = [170, 165, 175, 185, 160];

//criei a variável maiorComprimento e dei a ela o valor de uma função que agrega ultimo valor do Array que satisfaz a função
let maiorComprimento = comprimentos.findLast((comprimento) => comprimento < 170);

//criei um console.log para exibir o valor da variável maiorComprimento
console.log(maiorComprimento);