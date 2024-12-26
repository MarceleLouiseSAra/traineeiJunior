import { Item } from "./model/interfaceItem";
import { adicionarProduto } from "./controller/controleEstoque";
import { removerProduto } from "./controller/controleEstoque";
import { listarProdutos } from "./controller/controleEstoque";
import { verValorTotal } from "./controller/controleEstoque";
import { verPesoTotal } from "./controller/controleEstoque";
import { verMediaValor } from "./controller/controleEstoque";
import { verMediaPeso } from "./controller/controleEstoque";
import { verQuantidadeTotal } from "./controller/controleEstoque";

import * as promptSync from "prompt-sync";
const prompt = promptSync();

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
  console.log(
    "Para ver a média total do valor dos produtos no estoque, digite '6'.",
  );
  console.log(
    "Para ver a média total do peso dos produtos no estoque, digite '7'.",
  );
  console.log(
    "Para ver a quantidade total de produtos em estoque, digite '8'.",
  );
  console.log("Para finalizar, digite '9'.");

  // let opcao: number;
  var modo = prompt("\nDigite o modo desejado: ");

  if (modo === "1") {
    const _nome = prompt("Digite o nome do produto: ");
    const _peso = Number(prompt("Digite o peso do produto: "));
    const _valor = Number(prompt("Digite o valor do produto: "));
    const _quantidade = Number(prompt("Digite a quantidade do produto: "));

    const item = {
      nome: _nome,
      peso: _peso,
      valor: _valor,
      quantidade: _quantidade,
    } as Item;

    adicionarProduto(item);
  }

  if (modo == "2") {
    const _nomeDoProduto = prompt(
      "Digite o nome do produto que desejas remover do estoque: ",
    );
    removerProduto(_nomeDoProduto);
  }

  if (modo == "3") {
    listarProdutos();
  }

  if (modo == "4") {
    verValorTotal();
  }

  if (modo == "5") {
    verPesoTotal();
  }

  if (modo == "6") {
    verMediaValor();
  }

  if (modo == "7") {
    verMediaPeso();
  }

  if (modo == "8") {
    verQuantidadeTotal();
  }

  if (modo == "9") {
    break;
  }
}
