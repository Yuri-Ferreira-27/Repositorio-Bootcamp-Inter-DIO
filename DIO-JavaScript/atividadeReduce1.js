/*Some todos os números de um array*/

console.log('Primeira forma de resolver: \n');

function somaArray(arr){
   return arr.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev + current;
    });
}

const numeros = [1,2,3,100];

console.log(somaArray(numeros));

// Outra forma de fazer:

console.log('\nSegunda forma de resolver: \n');

function somaNumeros(arr) {
	if (!arr || !arr.length) return;
	const soma = arr.reduce((prev, curr) => prev + curr);

	return soma;
}

console.log(somaNumeros([1, 2, 3, 100]));
