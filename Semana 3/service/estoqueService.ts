// No nosso service, vamos fazer as chamadas diretas no csv e operações.

import readCSV from "../model/readCSV";
import writeCSV from "../model/writeCSV";
import { Item } from "../model/interfaceItem";
import * as fs from "fs";

import * as promptSync from "prompt-sync";
const prompt = promptSync();

const filePath = "./model/estoque.csv";

class estoqueService {
  static async criarItem(item: Item) {
    if (
      typeof item.nome != "string" ||
      isNaN(item.peso) ||
      isNaN(item.valor) ||
      isNaN(item.quantidade)
    ) {
      throw new Error(
        "\nos tipos das entradas fornecidas não são os esperados.",
      );
    } else if (item.peso * 1000 > 99999) {
      throw new Error(
        '\no peso dos produtos deve ser infromado em quilogramas, utilizando um ".".',
      );
    } else {
      const csvContent = await readCSV(filePath);
      if (csvContent.length == 0) {
        const header = "nome,peso,valor,quantidade";
        fs.writeFile(filePath, header, (err) => {
          if (err) {
            console.error("erro ao escrever no arquivo:", err);
          }
        });
        await writeCSV(filePath, [item]);
      } else {
        for (let i = 0; i < csvContent.length; i++) {
          if (csvContent[i].nome === item.nome) {
            throw new Error("\njá existe um produto com esse nome.");
          }
        }

        const newCSV = await readCSV(filePath);
        newCSV.push(item);
        await writeCSV(filePath, newCSV);
      }
    }
  }

  static async removerItem(nomeDoProduto: string) {
    const csvContent = await readCSV(filePath);

    if (csvContent.length == 0) {
      throw new Error("\nnão há produtos no estoque.");
    } else {
      let newCSV: Array<Item> = [];

      if (csvContent.length == 0) {
        throw new Error("\nnão há produtos no estoque.");
      } else {
        for (let i = 0; i < csvContent.length; i++) {
          if (csvContent[i].nome === nomeDoProduto) {
            console.log("\nFoi encotrado o seguinte produto com esse nome: ");
            console.log(csvContent[i]);
            const resposta = prompt(
              '\nVocê deseja remover esse produto? Se sim, digite "sim".',
            );
            if (resposta.toLowerCase() === "sim") {
              continue;
            } else {
              newCSV.push(csvContent[i]);
              console.log("\nO produto não foi removido.");
              continue;
            }
          } else {
            newCSV.push(csvContent[i]);
          }
        }
      }
      await writeCSV(filePath, newCSV);
    }
  }

  static async listarItens() {
    const csvContent = await readCSV(filePath);
    for (let i = 0; i < csvContent.length; i++) {
      console.log(csvContent[i]);
    }
  }

  static async calcularValorTotal() {
    const csvContent = await readCSV(filePath);
    let valorTotal: number = 0;
    for (let i = 0; i < csvContent.length; i++) {
      if (
        csvContent[i].valor !== null &&
        csvContent[i].valor !== undefined &&
        csvContent[i].quantidade !== null &&
        csvContent[i].quantidade !== undefined
      ) {
        valorTotal += csvContent[i].valor * csvContent[i].quantidade;
      } else {
        throw new Error("\nvalores nulos ou indefinidos.");
      }
    }
    return valorTotal;
  }

  static async calcularPesoTotal() {
    const csvContent = await readCSV(filePath);
    let pesoTotal: number = 0;
    for (let i = 0; i < csvContent.length; i++) {
      if (
        csvContent[i].peso !== null &&
        csvContent[i].peso !== undefined &&
        csvContent[i].quantidade !== null &&
        csvContent[i].quantidade !== undefined
      ) {
        pesoTotal += csvContent[i].peso * csvContent[i].quantidade;
      } else {
        throw new Error("\nvalores nulos ou indefinidos.");
      }
    }
    return pesoTotal;
  }

  static async calcularQuantidadeTotalDeItens() {
    const csvContent = await readCSV(filePath);
    let quantidadeTotal: number = 0;
    for (let i = 0; i < csvContent.length; i++) {
      if (
        csvContent[i].quantidade !== null &&
        csvContent[i].quantidade !== undefined
      ) {
        quantidadeTotal += csvContent[i].quantidade * 1; //gambiarra
      } else {
        throw new Error("\nvalores nulos ou indefinidos.");
      }
    }
    return quantidadeTotal;
  }

  static async calcularQuantidadeTotalDeProdutos() {
    const csvContent = await readCSV(filePath);
    console.log(csvContent.length);
  }

  static async calcularMediaValor() {
    let quantidadeTotal = await this.calcularQuantidadeTotalDeItens();
    let valorTotal = await this.calcularValorTotal();
    let mediaValor = valorTotal / quantidadeTotal;
    console.log("R$", mediaValor.toFixed(2));
  }

  static async calcularMediaPeso() {
    let quantidadeTotal = await this.calcularQuantidadeTotalDeItens();
    let valorPeso = await this.calcularPesoTotal();
    let mediaPeso = valorPeso / quantidadeTotal;
    console.log(mediaPeso.toFixed(2), "Kg");
  }
}

export default estoqueService;
