//Exercicio 01
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let numerInt of numbers) {
    console.log(numerInt);
}


//Exercicio 02
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let numerInt of numbers) {
//     numerInt += 1;
//     console.log(numerInt);
// }


//Exercicio 03
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// //Pegar soma de todos os numeros
// for (let index = 0; index < numbers.length; index++) {
//     soma += numbers[index];
// }
// //Dividir a soma de todos pela quantidade de numeros no array
// console.log(soma / numbers.length);


//Exercicio 04
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 24];
// let soma = 0;

// for (let index = 0; index < numbers.length; index++) {
//      soma += numbers[index];
// }

// if(soma / numbers.length > 20) {
//     console.log('Valor maior que 20 pae')
// }
// else {
//     console.log('Valor menor ou igual a 20, ossada em pae')
// }


//Exercicio 05
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let valor = 0;

// for (let index = 0; index < numbers.length; index++) {
//     if(numbers[index] > valor) {
//         valor = numbers[index]
//     }
// }
// console.log(valor)


// Exercicio 06
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let valor = 0;

// for (let index = 0; index < numbers.length; index++) {
//     if(numbers[index] % 2 !== 0) {
//         valor += 1;
//     }
// }
// if(valor == 0) {
//     console.log('Nenhum numero impar')
// } else {
//     console.log('Boa men, ' + valor + ' numeros')
// }


//Exercicio 07
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let valor = numbers[0];

// for (let index = 0; index < numbers.length; index++) {
//     if(numbers[index] < valor) {
//         valor = numbers[index]
//     }
// }
// console.log(valor)


//Exercicio 08
// let array = [];

// for (let index = 0; index <= 25; index++) {
//     array.push(index);
// }
// console.log(array);


//Exercicio 09
// let array = [];

// for (let index = 0; index <= 25; index++) {
//     array.push(index /2);
// }
// console.log(array);


/////////////////////////////////////////////////////////////////////////////


//Conteudo 01
// let numero = 7;
//
// for (let contador = 1; contador <= 9; contador++){
//     console.log('')
//     console.log(numero * contador);
// }


//Conteudo 02
// let lista = ["Leo", "Lucas", "Clara", "Thurra"]
//
// for (let indice = 0; indice < lista.length; indice++) {
//     let mensagem = "Parabens, " + lista[indice] + ", Vcs passou!"
//     console.log(mensagem)
// }


//Conteudo 03 USANDO FOR JUNTO COM "OF" MUITO MAIS FACIL E FODA!
// let nomes = ['Leo','Thurra','Lucas','Kelvi'];
//
// for (let nomeIndividual of nomes) {
//     console.log('Salve, ' + nomeIndividual + '!');
// }
//
//Outro Exemplo FODA, MAS AGORA TAMBEM SOMANDO UM VALOR DPS!
// let numeros = [10, 20, 30]
//
// for (let numeroIndividual of numeros) {
//     numeroIndividual += 1; 
//     console.log(numeroIndividual);
// }
//
// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
//
// for (let namesIndividuais of names) {
//     console.log(namesIndividuais)
// }


//ESCREVER DETERMINADO INDICE EM UM ARRAY
//console.log(indice[numero da casa])
//console.log(indice[0])


//COLOCAR DADOS DENTRO DE UM ARRAY COM PUSH
//let numero1 = 1
//let variavalDoArray = [];
//variavelDoArray.push[numero1]
