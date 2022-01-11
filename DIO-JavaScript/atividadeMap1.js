/*
Pratique a sintaxe de multiplicação de números, utilizando o parâmetro this de um objeto criado por você.
*/

const banana = {
    preco: 3
};

const uva = {
    preco: 4
};

const melancia = {
    preco: 12
};

function mapArray(){
    const vetor = [1,2,3,4,5];

    return vetor.map(function (item){
        return item * this.preco;
    },melancia);
};

console.log(mapArray());