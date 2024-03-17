//Exemplo 1
//criei a variável composta Bairro e atribui valores a ela
let bairros = [
    {nome: 'Paiquerê' },
    {nome: 'Parque Terra Nova' }, 
    {nome: 'Castelo'},
    {nome:'Nova Valinhos'}
];

//criei a variavel comecaComP e dei o valor da função bairro a ela, no qual vai ver se o nome do bairro começa com P
let comecaComP = (bairro) => bairro.nome.startsWith('P')

//coloquei o console.log, que fara a função de exibir se algum bairro começa com a letra 'P'
console.log(bairros.some(comecaComP));

//Exemplo 2
//criei a variável composta Pessoas e atribui valores a ela
let Pessoas = [
    {nome: 'Pedro' },
    {nome: 'Maicon' }, 
    {nome: 'João'},
    {nome:'Marcelo'}
];

//criei a variavel comecaComM e dei o valor da função pessoa a ela, no qual vai ver se algum nome de Pessoas começa com 'M'
let comecaComM = (pessoa) => pessoa.nome.startsWith('M')

//coloquei o console.log, que fara a função de exibir se algum nome de Pessoas começa com a letra 'M'
console.log(bairros.some(comecaComM));
