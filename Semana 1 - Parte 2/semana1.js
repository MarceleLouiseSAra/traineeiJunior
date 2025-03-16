//Se você chegou até aqui, parabéns!
//Aqui teremos alguns exercícios um pouco mais desafiadores.
//Se você não conseguiu resolver algum deles, não se preocupe, é normal, eu mesmo não dei conta de alguns na minha época (já fazem 84 anos).
//Com toda a bondade do meu coração, eu deixei o gabarito de cada exercício no final da página de exercícios no Notion.
//MASSSSSSSSSSSSSS antes de olhar o gabarito, faça o dev feliz e tente resolver os exercícios sozinho(a) primeiro, ok?
//Quando chegar ao final, você terá aprendido o básico de JavaScript e poderá dar o próximo passo.

const prompt = require("prompt-sync")();

// 1. Arrays e Loops
// Crie uma função chamada "dobrarNumeros" que recebe um array de números como parâmetro e retorna um novo array onde cada número é dobrado.
// Dica: use um loop for para percorrer o array e o método push para adicionar elementos ao array resultante.
function dobrarNumeros(nums) {
    var numerosDobrados = [];

    for (var i = 0; i < nums.length; i++) {
        numerosDobrados.push(nums[i] * 2)
    }

    return numerosDobrados;
}

// nums = [1, 2, 3, 4]
// console.log(dobrarNumeros(nums))

// 2. Objetos
// Crie uma função chamada "criarPessoa" que recebe dois parâmetros: "nome" e "idade".
// A função deve retornar um objeto com as propriedades "nome" e "idade" de acordo com os parâmetros fornecidos.
function criarPessoa(nome, idade) {
    const pessoa = {
        nome: nome,
        idade: idade
    };
    return pessoa;
}

// var nome = "Marcele"
// var idade = 21

// console.log(criarPessoa(nome, idade))

// 3. Arrow Functions
// Converta a função "dobrarNumeros" do exercício 1 em uma arrow function.
// Dica: use o método map para percorrer o array e dobrar cada elemento.
// No final do arquivo, o gabarito deste exercício está comentado.

nums = [1, 2, 3, 4]

var numerosDobrados = nums.map((valorAtual) => valorAtual * 2)

// console.log(numerosDobrados)

// 4. Map
// Crie uma função chamada "calcularDobro" que recebe um array de números como parâmetro e retorna um novo array onde cada número é dobrado, usando o método map.
// Dica, é o mesmo da questão 3, porém com uma função nomeada.

function calcularDobro(nums) {
    return numerosDobrados = nums.map((valorAtual) => valorAtual *2)
}

nums = [1, 2, 3, 4]

// console.log(calcularDobro(nums))

// 5. Objeto - Chaves e Valores
// Crie uma função chamada "listarPropriedades" que recebe um objeto como parâmetro e retorna um array com as chaves desse objeto.
// Dica: use o método keys para obter as chaves do objeto.
function listarPropriedades(obj) {
    return Object.keys(obj)
}

pessoa = {
    nome: 'Marcele',
    idade: 21
}

// console.log(listarPropriedades(pessoa))

// 6. Objeto - Valores
// Crie uma função chamada "listarValores" que recebe um objeto como parâmetro e retorna um array com os valores desse objeto.
// Dica: use o método values para obter os valores do objeto.
function listarValores(obj) {
    return Object.values(obj)
}

pessoa = {
    nome: 'Marcele',
    idade: 21
}

// console.log(listarValores(pessoa))

// 7. forEach
// Crie uma função chamada "mostrarElementos" que recebe um array como parâmetro e imprime cada elemento do array usando o método forEach.
// Dica: use o método forEach para percorrer o array e o método console.log para imprimir cada elemento.
function mostrarElementos(arr) {
    arr.forEach((element) => console.log(element))
}

nomeCompleto = ["Marcele", "Louise", "Silva", "Araponga"]

mostrarElementos(nomeCompleto)

// 8. Arrow Functions e Operadores Aritméticos
// Crie uma função chamada "calcularPotencia" que recebe dois parâmetros: "base" e "expoente". UTILIZANDO ARROW FUNCTION
// A função deve retornar o resultado da base elevada ao expoente, usando o operador de exponenciação (**).
const calcularPotencia = (base, expoente) => base**expoente

// console.log(calcularPotencia(2, 3))

// 9. Arrays e Métodos de Array
// Crie uma função chamada "encontrarMaiores" que recebe um array de números como parâmetro.
// A função deve retornar um novo array contendo apenas os números maiores do que 10.
// Dica: use o método filter para percorrer o array e filtrar os números maiores do que 10, easy peasy.
function encontrarMaiores(nums) {

    function callback(valorAtual) {
        return valorAtual > 10
    }

    return nums.filter(callback)
}

// nums = [1, 15, 8, 19, 100, 2]
// filtrados = encontrarMaiores(nums)
// console.log(filtrados)

// 10. Objeto - Método
// A função deve retornar o volume do retângulo.
function calcularVolumeRetangulo(comprimento, largura, profundidade) {
    return comprimento*largura*profundidade
};
//antes de subir o exercício percebi um erro profano no exercício 10, mas quis deixá-lo aqui.
//Caso você encontre o erro, mande uma mensagem no telegram informando qual foi e ganhe um brinde surpresa.
//(limitado a 3 brindes, senão o financeiro fica bravo)
//válido somente para os trainees de 2023/2.
// queria-se testar um método enquanto propriedade do objeto?

// 11. Arrays e Reduce
// Crie uma função chamada "calcularSoma" que recebe um array de números como parâmetro.
// A função deve retornar a soma de todos os números no array, usando o método reduce.
function calcularSoma(nums) {

    function somarNumeros(acumulador, valorAtual) {
        return acumulador + valorAtual
    }

    return nums.reduce(somarNumeros)
}

// nums = [1, 2, 3]
// soma = calcularSoma(nums)
// console.log(soma)

//NÃO ALTERE NADA ABAIXO DESTA LINHA
module.exports = {
    dobrarNumeros: dobrarNumeros,
    criarPessoa: criarPessoa,
    calcularDobro: calcularDobro,
    listarPropriedades: listarPropriedades,
    listarValores: listarValores,
    mostrarElementos: mostrarElementos,
    calcularPotencia: calcularPotencia,
    encontrarMaiores: encontrarMaiores,
    calcularVolumeRetangulo: calcularVolumeRetangulo,
    calcularSoma: calcularSoma
    
};
