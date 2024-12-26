// O controller vai ser responsável pelas funções principais do programa, basicamente todas as histórias de usuário.

import { Item } from "../model/interfaceItem";
import estoqueService from "../service/estoqueService";

export function adicionarProduto(item: Item) {
  try {
    estoqueService.criarItem(item);
    console.log("\nItem adicionado com sucesso!");
  } catch (error) {
    console.log("\nErro ao adicionar produto ao estoque.");
  }
}

export function removerProduto(nomeDoProduto: string) {
  try {
    estoqueService.removerItem(nomeDoProduto);
    console.log("\nProduto removido com sucesso.");
  } catch (error) {
    console.log("\nErro ao remover produto do estoque.");
  }
}

export function listarProdutos() {
  try {
    estoqueService.listarItens();
    console.log("\nProdutos listados com sucesso.");
  } catch (error) {
    console.log("\nErro ao listar produtos em estoque.");
  }
}

export function verValorTotal() {
  try {
    console.log(estoqueService.calcularValorTotal());
    console.log("\nValor total dos produtos em estoque calculado com sucesso.");
  } catch (error) {
    console.log("\nErro ao calcular valor total do estoque.");
  }
}

export function verPesoTotal() {
  try {
    console.log(estoqueService.calcularPesoTotal());
    console.log("\nPeso total dos produtos em estoque calculado com sucesso.");
  } catch (error) {
    console.log("\nErro ao calcular peso total do estoque.");
  }
}

export function verMediaValor() {
  try {
    estoqueService.calcularMediaValor();
    console.log(
      "\nMédia total do valor dos produtos em estoque calculado com sucesso.",
    );
  } catch (error) {
    console.log("\nErro ao calcular média total do valor do estoque.");
  }
}

export function verMediaPeso() {
  try {
    estoqueService.calcularMediaPeso();
    console.log(
      "\nMédia total do peso dos produtos em estoque calculado com sucesso.",
    );
  } catch (error) {
    console.log("\nErro ao calcular média total do peso do estoque.");
  }
}

export function verQuantidadeTotal() {
  try {
    console.log(estoqueService.calcularQuantidadeTotal());
    console.log(
      "\nQuantidade total de produtos em estoque calculado com sucesso.",
    );
  } catch (error) {
    console.log("\nErro ao calcular quantidade total do estoque.");
  }
}
