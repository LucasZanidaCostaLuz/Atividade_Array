//Exemplo 1
//criei uma variável idades e atribuí valor a ela
let idades = [3, 17, 58, 13, 15];

//criei uma variável Maiorde18 com o valor de uma função que ve se a idade é maior de 18
let Maiorde18 = (idade) => idade > 18;

//usei o console.log para mostrar o indice do valor maior que 18
console.log(idades.findIndex(Maiorde18));

//Exemplo 2
//criei uma variável idades e atribuí valor a ela
let numeros = [3.4, 17.8, 58.6, 13, 15.3];

//criei uma variável Maiorde18 com o valor de uma função que ve se a idade é maior de 18
let inteiros = (numero) => numero % 1 == 0;

//usei o console.log para mostrar o indice do valor maior que 18
console.log(numeros.findIndex(inteiros));