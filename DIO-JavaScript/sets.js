/*
Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.
*/

var array = [30, 30, 40, 5, 223, 2049, 3034, 5];
var newArray = [];

function valoresUnicos(){

    newArray = new Set(array);
    return [...newArray];
}
console.log(valoresUnicos(array))

