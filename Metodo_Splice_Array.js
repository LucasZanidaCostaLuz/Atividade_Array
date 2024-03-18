//Exemplo de adicionar elemento com splice
//criei uma variável insetos e dei valores a ela
let insetos = ['mosquito', 'abelha', 'mariposa', 'besouro'];

//usando o splice eu coloquei uma string 'borboleta'na terceira posição, fazendo o besouro ir para a quarta posição
insetos.splice(3, 0, 'borboleta');

//usei o console.log para exibir a mudança feita
console.log(insetos);

//Exemplo de remover elementos com splice
//criei a variavel Brics e adicionei valores a ela
let Brics = ['Brasil', 'Rússia', 'Índia', 'China', 'África do Sul', 'México'];

//removi o valor cujo indice é 5 na Array
Brics.splice(5,1);

//usei o console.log para exibir a mudança feita
console.log(Brics);

//Exemplo de substituir elemento com splice
//criei a variável marcasDeCarro e atribuí valores a ela
let marcasDeCarro = ['chevrolet', 'hyundai', 'peugeout', 'Samsung']

//substituí o valor cujo indice é 3 ('Samsung') por 'Renault'
marcasDeCarro.splice(3,1, 'Renault');

//usei o console.log para exibir a mudança feita
console.log(marcasDeCarro);