//Exemplo 1
//criei a variável idade e atribui valores a ela
let Idades = [5, 12, 8, 19, 17];

//criei a variável maiorDezoito e atribui a ela o valor de uma função que fala se alguma das Idades é maior que 18
let maiorDezoito = Idades.find((idade) => idade > 18);

//coloquei o console.log, que fara a função de exibir o primeiro número que cumprir o requisito
console.log(maiorDezoito);

//Exemplo 2
//criei a variável idade e atribui valores a ela
let Numeros = [-5, 12, -8, -19, -17];

//criei a variável numeroPositivo e atribui a ela o valor de uma função que fala se algum dos Numeros é positivo
let numeroPositivos = Numeros.find((numero) => numero > 0);

//coloquei o console.log, que fara a função de exibir o primeiro número que cumprir o requisito
console.log(numeroPositivos);
