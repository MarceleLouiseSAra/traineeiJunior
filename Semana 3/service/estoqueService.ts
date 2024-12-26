// No nosso service, vamos fazer as chamadas diretas no csv e operações.

import readCSV from "../model/readCSV";
import writeCSV from "../model/writeCSV";
import { Item } from "../model/interfaceItem";
import * as fs from "fs";

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
        "\nOs tipos das entradas fornecidas não são os esperados.",
      );
    } else {
      const csvContent = await readCSV(filePath);
      if (csvContent.length == 0) {
        const header = "nome,peso,valor,quantidade";
        fs.writeFile(filePath, header, (err) => {
          if (err) {
            console.error("Erro ao escrever no arquivo:", err);
          }
        });
        await writeCSV(filePath, [item]);
      } else {
        const newCSV = await readCSV(filePath);
        newCSV.push(item);
        await writeCSV(filePath, newCSV);
      }
    }
  }

  static async removerItem(nomeDoProduto: string) {
    const csvContent = await readCSV(filePath);

    if (csvContent.length == 0) {
      throw new Error("\nNão há produtos no estoque.");
    } else {
      let newCSV: Array<Item> = [];

      if (csvContent.length == 0) {
        throw new Error("\nNão há produtos no estoque.");
      } else {
        for (let i = 0; i < csvContent.length; i++) {
          if (csvContent[i].nome != nomeDoProduto) {
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
        throw new Error("\nValores nulos ou indefinidos.");
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
        throw new Error("\nValores nulos ou indefinidos.");
      }
    }
    return pesoTotal;
  }

  static async calcularQuantidadeTotal() {
    const csvContent = await readCSV(filePath);
    let quantidadeTotal: number = 0;
    for (let i = 0; i < csvContent.length; i++) {
      if (
        csvContent[i].quantidade !== null &&
        csvContent[i].quantidade !== undefined
      ) {
        quantidadeTotal += csvContent[i].quantidade;
      } else {
        throw new Error("\nValores nulos ou indefinidos.");
      }
    }
    return quantidadeTotal;
  }

  static async calcularMediaValor() {
    let quantidadeTotal = await this.calcularQuantidadeTotal();
    let valorTotal = await this.calcularValorTotal();
    let mediaValor = valorTotal / quantidadeTotal;
    console.log(mediaValor);
  }

  static async calcularMediaPeso() {
    let quantidadeTotal = await this.calcularQuantidadeTotal();
    let valorPeso = await this.calcularPesoTotal();
    let mediaPeso = valorPeso / quantidadeTotal;
    console.log(mediaPeso);
  }
}

export default estoqueService;
