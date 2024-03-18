//Exemplo 1
//Criei a variável larguras e atribuí valores a ela
let larguras = [105, 120, 500, 130, 440];

//criei outra variável e atribuí a ela o valor de uma função que pede um número que seja maior que 105 na Array
let maiorLargura = (largura) => largura > 105;

//usei o console.log para exibir o último valor que cumpre o requisito da variável maiorLargura
console.log(larguras.findLastIndex(maiorLargura));

//Exemplo 2
//Criei a variável pesos e atribuí valores a ela
let pesos = [70, 80, 60, 50, 90];

//criei outra variável e atribuí a ela o valor de uma função que pede um número que seja menor que 70 na Array
let maiorPeso = (peso) => peso  < 70;

//usei o console.log para exibir o último valor que cumpre o requisito da variável maiorPeso
console.log(pesos.findLastIndex(maiorPeso));