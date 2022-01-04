/*
Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!
*/
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Yuri",
    idade: 22
}
const pessoa2 = {
    nome: "Vitória",
    idade: 23
}

//console.log(calculaIdade.call(pessoa1,20));
console.log(calculaIdade.apply(pessoa2, [20]));
