/*
Atividade: validação de erros por tipo
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
*/


function validaArrayys(arr, num){
    
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr != 'object') throw new TypeError("Envie um elemento do tipo Array!");

        if(typeof num != 'number') throw new TypeError("Envie um elemento do tipo Number!");

        if(arr.length !== num) throw new RangeError("Tamanho inválido");

        return arr;
    }
    catch(e){
        if (e instanceof RangeError) {
			console.log('Houve um erro do tipo RangeError!');
			console.log(e.stack);
		} else if (e instanceof ReferenceError) {
			console.log('Houve um erro do tipo ReferenceError!');
			console.log(e.stack);
		} else {
			console.log('Houve outro tipo de erro!');
			console.log(e.stack);
		}
    }
};

console.log(validaArrayys([1,2,3],3));
