

// let n1 = 20
// let n2 = 20

// if (n1 > n2) {
//     console.log(n1);
    
// } else if (n2 > n1) {
//     console.log(n2);
    
// } else {
//     console.log("Numeros são iguais");
    
// }


// let number = 0

// if (number>=0) {
//     console.log("Positivo");
    
// } else{
//     console.log("Negativo");
    
// }


// let sexo = "f"

// if (sexo.toUpperCase() === "M") {
//     console.log("Sexo Masculino");
// } else if (sexo.toUpperCase() === "F") {
//     console.log("Sexo Feminino");
// } else{
//     console.log("Sexo inválido");
// }


// let letra = "a"

// if (letra.toLocaleLowerCase() == "a" || letra.toLocaleLowerCase() == "e" || letra.toLocaleLowerCase() == "i" || letra.toLocaleLowerCase() == "o" || letra.toLocaleLowerCase() == "u"){
//     console.log("Vogal");
    
// } else {
//     console.log("Consoante");
    
// }


// let nota1 = 10
// let nota2 = 4
// let media = (nota1 + nota2) / 2

// if (media === 10) {
//     console.log("Aprovado com distinção");
    
// } else if (media>=7){
//     console.log("Aprovado");
    
// } else{
//     console.log("Reprovado");

// } 


// let maior = 40
// let numero2 = 200
// let numero3 = 30

// if (maior<numero2){
//     maior = numero2
// }
// if (maior<numero3){
//     maior = numero3
// }    
// console.log(`${maior} é maior`);


// let numero = 12

// if (numero % 3 === 0 && numero % 4 === 0) {
//     console.log("mar menino");
// } else if (numero % 4 === 0) {
//     console.log("menino");     
// } else if (numero % 3 === 0) {
//     console.log("mar");
// } else{
//     console.log("Invalido");
// }   


let salario = 2000

if (salario <= 280) {
    let novoSalario = salario * 1.2
    let valorAumento = salario * 0.2
    console.log(`Salário: R$ ${salario}`);
    console.log(`Novo Salario: R$ ${novoSalario}`);
    console.log(`Valor aumento: R$ ${valorAumento}`);
    console.log(`Percentual aplicado: 20 %`);
    
} else if (salario > 280 && salario <=700) {
    let novoSalario = salario * 1.15
    let valorAumento = salario * 0.15
    console.log(`Salário: R$ ${salario}`);
    console.log(`Novo Salario: R$ ${novoSalario}`);
    console.log(`Valor aumento: R$ ${valorAumento}`);
    console.log(`Percentual aplicado: 15 %`);

} else if (salario > 700 && salario<= 1500) {
    let novoSalario = salario * 1.10
    let valorAumento = salario * 0.10
    console.log(`Salário: R$ ${salario}`);
    console.log(`Novo Salario: R$ ${novoSalario}`);
    console.log(`Valor aumento: R$ ${valorAumento}`);
    console.log(`Percentual aplicado: 10 %`);
    
} else {
    let novoSalario = salario * 1.05
    let valorAumento = salario * 0.05
    console.log(`Salário: R$ ${salario}`);
    console.log(`Novo Salario: R$ ${novoSalario}`);
    console.log(`Valor aumento: R$ ${valorAumento}`);
    console.log(`Percentual aplicado: 5 %`);
}