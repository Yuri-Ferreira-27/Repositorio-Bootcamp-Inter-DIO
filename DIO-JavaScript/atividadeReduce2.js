/*Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. 
Calcule qual será o saldo final após subtrair todos os preços da lista enviada. */

const lista = [
    {
        name: 'arroz', 
        preco: 20
    },   
    {
        name: 'feijão',
        preco: 7
    },   
    {
        name: 'macarrão',
        preco: 3
    },   
    {
        name: 'carne',
        preco: 38
    },   
    {
        name: 'frango',
        preco: 12
    },   
];

const saldoDisponivel = 200;

function calcularSaldo(saldoDisponivel,lista){
    return lista.reduce(function(prev, current, index){
        console.log('Rodada ', index + 1 );
         console.log({prev});
         console.log({current});
         return prev - current.preco;
     },saldoDisponivel);
 }
 
 console.log(calcularSaldo(saldoDisponivel,lista));

 // Outra forma:
/*
 function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

	return `O saldo final será de ${saldoFinal} reais`;
}

console.log(calculaSaldo(saldoDisponivel, lista));
*/