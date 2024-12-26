import * as fs from "fs";
import * as parse from "csv-parser";
import { Item } from "../model/interfaceItem";

const readCSV = async (filePath: string): Promise<Item[]> => {
  return new Promise((resolve, reject) => {
    const results: Item[] = [];
    fs.createReadStream(filePath, "utf8")
      .pipe(parse())
      .on("data", (data: Item) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (error) => reject(error));
  });
};

export default readCSV;
