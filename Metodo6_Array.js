//Exemplo 1
//criei a variável países e atribuí valores a ela
let países = ['África do Sul', 'Gana', 'Níger', 'Líbia', 'Zâmbia'];

//criei a variável paísesPoucaLetra e dei o valor da função páis a ela, que filtra os países que tem menos que 6 letras
let paísesPoucaLetra = países.filter((país) => país.length < 6);

//exibe o valor da variável paísesPoucaLetra
console.log(paísesPoucaLetra);

//Exemplo 2
//criei a variável desenhos e atribuí valores a ela
let desenhos = ['ben 10', 'pokemon', 'barbie', 'super choque', 'apenas um show'];

//criar a variável 
const desenhosMuitaLetras = desenhos.filter((desenho) => desenho.length > 6);


console.log(desenhosMuitaLetras);