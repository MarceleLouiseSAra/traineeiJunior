import * as fs from "fs";
import { Item } from "../model/interfaceItem";

async function writeCSV(filePath: string, data: Item[]): Promise<void> {
  return new Promise((resolve, reject) => {
    if (data.length === 0) {
      return reject(new Error("Não há dados para escrever no arquivo CSV."));
    }

    const headers = Object.keys(data[0]);
    const rows = data.map((row) =>
      headers.map((header) => row[header]).join(","),
    );

    const csvContent = [headers.join(","), ...rows].join("\n");

    fs.writeFile(filePath, csvContent, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

export default writeCSV;
