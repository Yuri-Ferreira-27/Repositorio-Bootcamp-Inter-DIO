/*Atividade para verificar se uma palavra é palindroma*/

function verificaPalindromo(string){
    if(!string) return "string inexistente";
    
    return string.split("").reverse().join("") === "string";
}

/*verificaPalindromo("ama");
console.log(`A palavra ${string} é uma palavra palíndroma`);
*/
console.log(verificaPalindromo("rever"));