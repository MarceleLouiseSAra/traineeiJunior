//Seja bem vindo ao ao seu primeiro desafio! :D
//Aqui você vai aplicar os conceitos que aprendeu no módulo até agora, para fixar o seu conhecimento.
//Para isso, criamos uma série de exercícios que falam sobre os tópicos vistos.

// 1. Variáveis
// Crie uma função chamada "nome" que recebe um parâmetro "texto" e retorna esse texto.
// Você deve simplesmente retornar o parâmetro recebido pela função. Note que esse exercicio já foi resolvido, para você ter um exemplo.
function nome(texto) {
    return texto;
}

// texto = "tchubirau"

const prompt = require("prompt-sync")();

// texto = prompt("Digite algo: ");
// console.log(nome(texto));

// 2. Operadores Aritméticos
// A função deve calcular e retornar a soma, subtração, multiplicação, divisão e resto da divisão de "a" por "b".
// Dentro desta função, você deve calcular cada uma das operações aritméticas mencionadas e atribuir os resultados a variáveis correspondentes.
// Ao final, você deve retornar um array contendo os resultados das operações. Note que esse exercicio já foi resolvido, para você ter um exemplo.
function operadoresAritmeticos(a, b) {
    var soma = a + b;
    var subtracao = a - b;
    var multiplicacao = a * b;
    var divisao = a / b;
    var restoDivisao = a % b;

    return [soma, subtracao, multiplicacao, divisao, restoDivisao];
}

// console.log(operadoresAritmeticos(2, 3))

// 3. Operadores Lógicos e de Comparação
// A função deve verificar se o número é par ou ímpar e retornar uma string indicando essa informação.
//Outputs esperados: par, ímpar.

function parOuImpar(numero) {
    // Dentro desta função, você deve usar o operador de resto (%) para verificar se o número é divisível por 2.
    // Se for divisível por 2, é par; caso contrário, é ímpar.
    // Retorne a string "par" ou "ímpar" com base nessa verificação.
    var resultado; /*seu código*/

    if (numero % 2 === 0) {
        resultado = "par";
    } else {
        resultado = "ímpar";
    }

    return resultado;
}

// numero = prompt("Me dê um número: ")
// console.log(parOuImpar(numero))

// 4. Estruturas Condicionais
// A função deve verificar se a pessoa pode dirigir com base na idade e retornar uma string correspondente.
// Outputs esperados: "Pode dirigir", "Não pode dirigir".
function podeDirigir(idade) {
    // Dentro desta função, você deve usar uma estrutura condicional (if/else) para verificar se a idade é maior ou igual a 18.
    var resultado; /*seu código*/

    if (idade >= 18) {
        resultado = "Pode dirigir";
    } else {
        resultado = "Não pode dirigir";
    }

    return resultado;
}

function verificaIdade() {
    while (1) {
        idade = prompt("Qual a sua idade?: ");

        if (idade <= 0) {
            console.log(
                "Idade negativa ou nula. Insira uma idade válida (positiva não-nula).",
            );
        } else {
            return idade;
        }
    }
}
// console.log(podeDirigir(verificaIdade()))

// 5. Estruturas de Repetição
function imprimirNumeros() {
    // Crie um loop for que itere de 1 a 5 e imprima cada número no console.
    // Ou seja, o resultado esperado é a impressão dos números de 1 a 5 no console.
    // Dica: use o console.log para imprimir os números.

    for (var i = 0; i <= 5; i++) {
        console.log(i);
    }
}

// imprimirNumeros()

// 6. Operadores Ternários
// A função deve determinar se o número é positivo, negativo ou zero e retornar uma string correspondente.
// Use o operador ternário para verificar se o número é positivo, negativo ou zero.
// Outputs esperados: "positivo", "negativo", "zero".
function verificarNumero(numero) {
    var resultado /* Seu código */;

    resultado = numero == 0 ? "zero" : numero > 0 ? "positivo" : "negativo";

    return resultado;
}

// numero = prompt("Me dê um número: ")
// console.log(verificarNumero(numero))

// 7. Variáveis e Operadores Aritméticos
// A função deve calcular e retornar a média aritmética dos três números.
function calcularMedia(a, b, c) {
    // Faça a soma dos três números e divida pelo número de elementos para calcular a média.
    var media; /*seu código*/

    media = (a + b + c) / 3;

    return media;
}

// function verificaEntradaNumerica(x) {

//     while (1) {

//         x = prompt("Me dê um número: ") // a função prompt sempre retorna uma string

//         if (x <= 0){
//             console.log("Entrada negativa ou nula. Insira uma entrada válida (positiva não-nula).")
//         } else {
//             return parseInt(x)
//         }
//     }
// }

// var a = verificaEntradaNumerica(a)
// var b = verificaEntradaNumerica(b)
// var c = verificaEntradaNumerica(c)

// console.log(calcularMedia(a, b, c))

// 8. Operadores Lógicos e de Comparação
// A função deve verificar se a pessoa é maior de idade (idade maior ou igual a 18) e retornar true ou false.
function maiorDeIdade(idade) {
    // Use um operador de comparação para verificar se a idade é maior ou igual a 18.
    // Retorne true se for, e false caso contrário.
    var resultado; /*seu código*/

    if (idade >= 18) {
        resultado = true;
    } else {
        resultado = false;
    }

    return resultado;
}

// var x = 0
// console.log(maiorDeIdade(verificaEntradaNumerica(x)))

// 9. Estruturas Condicionais e Operadores Lógicos
// Crie uma função chamada "podeVotar" que recebe dois parâmetros: "idade" e "temTituloEleitoral". (tem título eleitoral é uma variável booleana)
// A função deve verificar se a pessoa pode votar, considerando que para votar é necessário ter 16 anos completos e possuir título de eleitor.
// Retorne true se a pessoa pode votar, e false caso contrário.
function podeVotar(idade, temTituloEleitoral) {
    // Use uma estrutura condicional para verificar as condições necessárias para votar.
    // Considere operadores lógicos para combinar as condições.
    var resultado; /*seu código*/

    if (idade >= 16 && temTituloEleitoral) {
        resultado = true;
    } else {
        resultado = false;
    }

    return resultado;
}

// var x = 0
// console.log(podeVotar(verificaEntradaNumerica(x), true))
// console.log(podeVotar(verificaEntradaNumerica(x), false))

// 10. Estruturas de Repetição e Operadores Aritméticos
// A função deve calcular e retornar a soma de todos os números de 1 até "n".
function somarNumerosAteN(n) {
    // Use um loop for para iterar de 1 até "n" e acumule a soma dos números.
    var soma = 0; /*seu código*/

    for (var i = 1; i <= n; i++) {
        soma += i;
    }

    return soma;
}

// var n = prompt("Me dê um número: ")
// console.log(somarNumerosAteN(parseInt(n)))

// 11. Operadores Ternários e Operadores de Comparação
// A função deve determinar qual dos dois números é maior e retornar esse número (nesse cenário, ainda não vamos tratar números iguais).
function maiorNumero(a, b) {
    // Use um operador ternário para determinar qual número é maior.
    var maior; /*seu código*/

    maior = a > b ? a : b;

    return maior;
}

// var a = 4
// var b = 3
// console.log(maiorNumero(a, b))

// 12. Estruturas Condicionais e Operadores Lógicos
// Crie uma função chamada "verificarTriangulo" que recebe três parâmetros "a", "b" e "c", que representam os lados de um triângulo.
// A função deve verificar e retornar o tipo de triângulo: equilátero, isósceles ou escaleno.
function verificarTriangulo(a, b, c) {
    // Use uma estrutura condicional para verificar as condições para cada tipo de triângulo.
    // Utilize operadores lógicos para combinar as condições.
    var tipo; /*seu código*/

    if (a != b && a != c && b != c) {
        tipo = "escaleno";
    }

    if (a == b || a == c || b == c) {
        tipo = "isósceles";
    }

    if (a == b && a == c) {
        tipo = "equilátero";
    }

    return tipo;
}

// var a = 2
// var b = 2
// var c = 2

// console.log(verificarTriangulo(a, b, c))

// 13. Operadores Aritméticos e Operadores Lógicos
// A função deve verificar se o ano é bissexto e retornar true ou false.
function verificarAnoBissexto(ano) {
    // Um ano é bissexto se for divisível por 4 e não for divisível por 100, ou se for divisível por 400.
    var resultado; /*seu código*/

    if (ano % 4 === 0 && !(ano % 100 === 0)) {
        resultado = true;
    } else {
        resultado = false;
    }

    // if ((ano%400) === 0) {
    //     resultado = true
    // } else {
    //     resultado = false
    // }

    return resultado;
}

// var ano = 2024
// console.log(verificarAnoBissexto(ano))

// 14. Variáveis e Operadores de Comparação
// Crie uma função chamada "compararStrings" que recebe dois parâmetros "str1" e "str2", que são strings.
// A função deve comparar as duas strings e retornar true se forem iguais e false caso contrário.
function compararStrings(str1, str2) {
    // Use o operador de comparação para verificar se as strings são iguais.
    var resultado; /*seu código*/

    if (str1 === str2) {
        resultado = true;
    } else {
        resultado = false;
    }

    return resultado;
}

// var str1 = "tchubirau"
// var str2 = "tchubirau"
// console.log(compararStrings(str1, str2))

// 15. Operadores Ternários e Operadores de Comparação
// Crie uma função chamada "maiorTresNumeros" que recebe três parâmetros "a", "b" e "c".
// A função deve determinar qual dos três números é o maior e retornar esse número.
function maiorTresNumeros(a, b, c) {
    // Use operadores ternários para comparar os números e determinar o maior.
    var maior; /*seu código*/

    maior = a > b ? (a > c ? a : c) : b > c ? b : c;

    return maior;
}

// var a = 4
// var b = 1
// var c = 10

// console.log(maiorTresNumeros(a, b, c))

//Parabéns! Você concluiu o desafio da semana 1!
//Para testar o seu código, rode o comando "npx jest" no terminal.

//NÃO ALTERAR ESSA LINHA
module.exports = {
    nome: nome,
    operadoresAritmeticos: operadoresAritmeticos,
    parOuImpar: parOuImpar,
    podeDirigir: podeDirigir,
    imprimirNumeros: imprimirNumeros,
    verificarNumero: verificarNumero,
    calcularMedia: calcularMedia,
    maiorDeIdade: maiorDeIdade,
    podeVotar: podeVotar,
    somarNumerosAteN: somarNumerosAteN,
    maiorNumero: maiorNumero,
    verificarTriangulo: verificarTriangulo,
    verificarAnoBissexto: verificarAnoBissexto,
    compararStrings: compararStrings,
    maiorTresNumeros: maiorTresNumeros,
};
