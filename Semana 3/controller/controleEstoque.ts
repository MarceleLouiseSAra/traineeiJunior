// O controller vai ser responsável pelas funções principais do programa, basicamente todas as histórias de usuário.

import { Item } from "../model/interfaceItem";
import estoqueService from "../service/estoqueService";

export async function adicionarProduto(item: Item) {
  try {
    await estoqueService.criarItem(item);
    console.log("\nItem adicionado com sucesso!");
  } catch (error) {
    console.log("\nErro ao adicionar produto ao estoque: ", error.message);
  }
}

export async function removerProduto(nomeDoProduto: string) {
  try {
    await estoqueService.removerItem(nomeDoProduto);
    console.log("\nProduto removido com sucesso!");
  } catch (error) {
    console.log("\nErro ao remover produto do estoque: ", error.message);
  }
}

export async function listarProdutos() {
  try {
    await estoqueService.listarItens();
    console.log("\nProdutos listados com sucesso!");
  } catch (error) {
    console.log("\nErro ao listar produtos em estoque: ", error.message);
  }
}

export async function verValorTotal() {
  try {
    console.log("R$ ", await estoqueService.calcularValorTotal());
    console.log("\nValor total dos produtos em estoque calculado com sucesso.");
  } catch (error) {
    console.log("\nErro ao calcular valor total do estoque: ", error.message);
  }
}

export async function verPesoTotal() {
  try {
    console.log(await estoqueService.calcularPesoTotal(), "Kg");
    console.log("\nPeso total dos produtos em estoque calculado com sucesso!");
  } catch (error) {
    console.log("\nErro ao calcular peso total do estoque: ", error.message);
  }
}

export async function verMediaValor() {
  try {
    await estoqueService.calcularMediaValor();
    console.log(
      "\nMédia total do valor dos produtos em estoque calculado com sucesso!",
    );
  } catch (error) {
    console.log(
      "\nErro ao calcular média total do valor do estoque: ",
      error.message,
    );
  }
}

export async function verMediaPeso() {
  try {
    await estoqueService.calcularMediaPeso();
    console.log(
      "\nMédia total do peso dos produtos em estoque calculado com sucesso!",
    );
  } catch (error) {
    console.log(
      "\nErro ao calcular média total do peso do estoque: ",
      error.message,
    );
  }
}

export async function verTotalItens() {
  try {
    console.log(await estoqueService.calcularQuantidadeTotalDeItens());
    console.log(
      "\nQuantidade total de itens em estoque calculado com sucesso!",
    );
  } catch (error) {
    console.log(
      "\nErro ao calcular quantidade total de itens do estoque: ",
      error.message,
    );
  }
}

export async function verTotalProdutos() {
  try {
    await estoqueService.calcularQuantidadeTotalDeProdutos();
    console.log(
      "\nQuantidade total de produtos em estoque calculado com sucesso!",
    );
  } catch (error) {
    console.log(
      "\nErro ao calcular quantidade total de produtos do estoque: ",
      error.message,
    );
  }
}
