"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controleEstoque_1 = require("./controller/controleEstoque");
var controleEstoque_2 = require("./controller/controleEstoque");
var controleEstoque_3 = require("./controller/controleEstoque");
var controleEstoque_4 = require("./controller/controleEstoque");
var controleEstoque_5 = require("./controller/controleEstoque");
var controleEstoque_6 = require("./controller/controleEstoque");
var controleEstoque_7 = require("./controller/controleEstoque");
var controleEstoque_8 = require("./controller/controleEstoque");
var promptSync = require("prompt-sync");
var prompt = promptSync();
function verificaEntradaAlfabetica() {
    return;
}
function verificaEntradaNumerica() {
    return;
}
while (1) {
    console.log("\nPara adicionar um produto, digite '1'.");
    console.log("Para remover um produto, digite '2'.");
    console.log("Para listar os produtos, digite '3'.");
    console.log("Para ver o valor total do estoque, digite '4'.");
    console.log("Para ver o peso total do estoque, digite '5'.");
    console.log("Para ver a média total do valor dos produtos no estoque, digite '6'.");
    console.log("Para ver a média total do peso dos produtos no estoque, digite '7'.");
    console.log("Para ver a quantidade total de produtos em estoque, digite '8'.");
    console.log("Para finalizar, digite '9'.");
    // let opcao: number;
    var modo = prompt("\nDigite o modo desejado: ");
    if (modo === "1") {
        var _nome = prompt("Digite o nome do produto: ");
        var _peso = Number(prompt("Digite o peso do produto: "));
        var _valor = Number(prompt("Digite o valor do produto: "));
        var _quantidade = Number(prompt("Digite a quantidade do produto: "));
        var item = {
            nome: _nome,
            peso: _peso,
            valor: _valor,
            quantidade: _quantidade,
        };
        (0, controleEstoque_1.adicionarProduto)(item);
    }
    if (modo == "2") {
        var _nomeDoProduto = prompt("Digite o nome do produto que desejas remover do estoque: ");
        (0, controleEstoque_2.removerProduto)(_nomeDoProduto);
    }
    if (modo == "3") {
        (0, controleEstoque_3.listarProdutos)();
    }
    if (modo == "4") {
        (0, controleEstoque_4.verValorTotal)();
    }
    if (modo == "5") {
        (0, controleEstoque_5.verPesoTotal)();
    }
    if (modo == "6") {
        (0, controleEstoque_6.verMediaValor)();
    }
    if (modo == "7") {
        (0, controleEstoque_7.verMediaPeso)();
    }
    if (modo == "8") {
        (0, controleEstoque_8.verQuantidadeTotal)();
    }
    if (modo == "9") {
        break;
    }
}
