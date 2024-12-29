import { Item } from "./model/interfaceItem";
import { adicionarProduto } from "./controller/controleEstoque";
import { removerProduto } from "./controller/controleEstoque";
import { listarProdutos } from "./controller/controleEstoque";
import { verValorTotal } from "./controller/controleEstoque";
import { verPesoTotal } from "./controller/controleEstoque";
import { verMediaValor } from "./controller/controleEstoque";
import { verMediaPeso } from "./controller/controleEstoque";
import { verTotalItens } from "./controller/controleEstoque";
import { verTotalProdutos } from "./controller/controleEstoque";

import * as promptSync from "prompt-sync";
const prompt = promptSync();

function verificaEntradaAlfabetica(): string {
  let controle = true;

  while (true) {
    const entradaAlfabetica: string | null = prompt();

    if (entradaAlfabetica === null) {
      console.log("\nEntrada inválida: KeyInterrupt ou entrada null.");
      continue;
    }

    if (
      /[áéíóúãõâêîôûàèìòù]/i.test(entradaAlfabetica) ||
      /[a-zA-Z\s]/.test(entradaAlfabetica)
    ) {
      return entradaAlfabetica;
    } else {
      for (let i = 0; i < entradaAlfabetica.length; i++) {
        const caractere = entradaAlfabetica[i];
        if (
          !/[áéíóúãõâêîôûàèìòù]/i.test(caractere) ||
          !/[a-zA-Z\s]/.test(caractere)
        ) {
          console.log("\nEntrada inválida: forneça uma nova entrada.");
          controle = false;
          break;
        }
      }
    }

    if (controle) {
      return entradaAlfabetica;
    } else {
      continue;
    }
  }
}

function verificaEntradaNumerica(): number {
  while (true) {
    try {
      const entradaNumerica = parseFloat(prompt());

      if (entradaNumerica === null) {
        console.log("\nEntrada inválida: KeyInterrupt ou entrada null.");
        continue;
      }

      if (isNaN(entradaNumerica)) {
        throw new Error(
          "\nEntrada inválida: é esperada uma entrada do tipo number.",
        );
      }

      if (entradaNumerica < 0) {
        console.log("\nEntrada negativa: forneça uma entrada válida.");
      } else {
        return entradaNumerica;
      }
    } catch (erro) {
      console.log(
        "\nO tipo da entrada dada é inesperado: forneça uma entrada válida.",
      );
    }
  }
}

async function main() {
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
    console.log("Para ver a quantidade total de itens em estoque, digite '8'.");
    console.log(
      "Para ver a quantidade total de produtos em estoque, digite '9'.",
    );
    console.log("Para finalizar, digite '0'.");

    console.log("\nDigite a opção desejada: ");
    let opcao: number = verificaEntradaNumerica();

    if (opcao === 1) {
      console.log("Digite o nome do produto: ");
      const _nome = verificaEntradaAlfabetica();
      console.log("Digite o peso do produto: ");
      const _peso = verificaEntradaNumerica();
      console.log("Digite o valor do produto: ");
      const _valor = verificaEntradaNumerica();
      console.log("Digite a quantidade do produto: ");
      const _quantidade = verificaEntradaNumerica();

      const item = {
        nome: _nome,
        peso: _peso,
        valor: _valor,
        quantidade: _quantidade,
      } as Item;

      await adicionarProduto(item);
    }

    if (opcao === 2) {
      console.log("Digite o nome do produto que desejas remover do estoque: ");
      const _nomeDoProduto = verificaEntradaAlfabetica();
      await removerProduto(_nomeDoProduto);
    }

    if (opcao === 3) {
      await listarProdutos();
    }

    if (opcao === 4) {
      await verValorTotal();
    }

    if (opcao === 5) {
      await verPesoTotal();
    }

    if (opcao === 6) {
      await verMediaValor();
    }

    if (opcao === 7) {
      await verMediaPeso();
    }

    if (opcao === 8) {
      await verTotalItens();
    }

    if (opcao === 9) {
      await verTotalProdutos();
    }

    if (opcao === 0) {
      break;
    }
  }
}

main();
