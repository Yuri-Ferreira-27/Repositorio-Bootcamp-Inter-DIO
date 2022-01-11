/*
Filtre e retorne todos os números pares de um array.
*/

function filtrarPares(arr){
    if (!arr || !arr.length) return;
    const filtroVetor = arr.filter((item) => item %2 === 0);
    return filtroVetor;
};

console.log(filtrarPares([19,28,32,47,51,64,78,83,96,10]));
console.log('\n');

//outra forma

const numeros = [1,2,3,4,5,6,7,8,9,10];

console.log((numeros.filter((item) => item %2 == 0)));
