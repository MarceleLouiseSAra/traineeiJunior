"use strict";
// O controller vai ser responsável pelas funções principais do programa, basicamente todas as histórias de usuário.
Object.defineProperty(exports, "__esModule", { value: true });
exports.adicionarProduto = adicionarProduto;
exports.removerProduto = removerProduto;
exports.listarProdutos = listarProdutos;
exports.verValorTotal = verValorTotal;
exports.verPesoTotal = verPesoTotal;
exports.verMediaValor = verMediaValor;
exports.verMediaPeso = verMediaPeso;
exports.verQuantidadeTotal = verQuantidadeTotal;
var estoqueService_1 = require("../service/estoqueService");
function adicionarProduto(item) {
    try {
        estoqueService_1.default.criarItem(item);
        console.log("\nItem adicionado com sucesso!");
    }
    catch (error) {
        console.log("\nErro ao adicionar produto ao estoque.");
    }
}
function removerProduto(nomeDoProduto) {
    try {
        estoqueService_1.default.removerItem(nomeDoProduto);
        console.log("\nProduto removido com sucesso.");
    }
    catch (error) {
        console.log("\nErro ao remover produto do estoque.");
    }
}
function listarProdutos() {
    try {
        estoqueService_1.default.listarItens();
        console.log("\nProdutos listados com sucesso.");
    }
    catch (error) {
        console.log("\nErro ao listar produtos em estoque.");
    }
}
function verValorTotal() {
    try {
        console.log(estoqueService_1.default.calcularValorTotal());
        console.log("\nValor total dos produtos em estoque calculado com sucesso.");
    }
    catch (error) {
        console.log("\nErro ao calcular valor total do estoque.");
    }
}
function verPesoTotal() {
    try {
        console.log(estoqueService_1.default.calcularPesoTotal());
        console.log("\nPeso total dos produtos em estoque calculado com sucesso.");
    }
    catch (error) {
        console.log("\nErro ao calcular peso total do estoque.");
    }
}
function verMediaValor() {
    try {
        estoqueService_1.default.calcularMediaValor();
        console.log("\nMédia total do valor dos produtos em estoque calculado com sucesso.");
    }
    catch (error) {
        console.log("\nErro ao calcular média total do valor do estoque.");
    }
}
function verMediaPeso() {
    try {
        estoqueService_1.default.calcularMediaPeso();
        console.log("\nMédia total do peso dos produtos em estoque calculado com sucesso.");
    }
    catch (error) {
        console.log("\nErro ao calcular média total do peso do estoque.");
    }
}
function verQuantidadeTotal() {
    try {
        console.log(estoqueService_1.default.calcularQuantidadeTotal());
        console.log("\nQuantidade total de produtos em estoque calculado com sucesso.");
    }
    catch (error) {
        console.log("\nErro ao calcular quantidade total do estoque.");
    }
}
