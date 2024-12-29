// O controller vai ser responsável pelas funções principais do programa, basicamente todas as histórias de usuário.

import { Item } from "../model/interfaceItem";
import estoqueService from "../service/estoqueService";

export async function adicionarProduto(item: Item) {
  try {
    await estoqueService.criarItem(item);
    console.log("\nItem adicionado com sucesso!");
  } catch (error) {
    console.log("\nErro ao adicionar produto ao estoque.");
  }
}

export async function removerProduto(nomeDoProduto: string) {
  try {
    await estoqueService.removerItem(nomeDoProduto);
    console.log("\nProduto removido com sucesso!");
  } catch (error) {
    console.log("\nErro ao remover produto do estoque.");
  }
}

export async function listarProdutos() {
  try {
    await estoqueService.listarItens();
    console.log("\nProdutos listados com sucesso!");
  } catch (error) {
    console.log("\nErro ao listar produtos em estoque.");
  }
}

export async function verValorTotal() {
  try {
    console.log(await estoqueService.calcularValorTotal());
    console.log("\nValor total dos produtos em estoque calculado com sucesso.");
  } catch (error) {
    console.log("\nErro ao calcular valor total do estoque.");
  }
}

export async function verPesoTotal() {
  try {
    console.log(await estoqueService.calcularPesoTotal());
    console.log("\nPeso total dos produtos em estoque calculado com sucesso!");
  } catch (error) {
    console.log("\nErro ao calcular peso total do estoque.");
  }
}

export async function verMediaValor() {
  try {
    await estoqueService.calcularMediaValor();
    console.log(
      "\nMédia total do valor dos produtos em estoque calculado com sucesso!",
    );
  } catch (error) {
    console.log("\nErro ao calcular média total do valor do estoque.");
  }
}

export async function verMediaPeso() {
  try {
    await estoqueService.calcularMediaPeso();
    console.log(
      "\nMédia total do peso dos produtos em estoque calculado com sucesso!",
    );
  } catch (error) {
    console.log("\nErro ao calcular média total do peso do estoque.");
  }
}

export async function verQuantidadeTotal() {
  try {
    console.log(await estoqueService.calcularQuantidadeTotal());
    console.log(
      "\nQuantidade total de produtos em estoque calculado com sucesso!",
    );
  } catch (error) {
    console.log("\nErro ao calcular quantidade total do estoque.");
  }
}
