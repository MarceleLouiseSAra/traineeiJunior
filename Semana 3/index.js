"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var controleEstoque_1 = require("./controller/controleEstoque");
var controleEstoque_2 = require("./controller/controleEstoque");
var controleEstoque_3 = require("./controller/controleEstoque");
var controleEstoque_4 = require("./controller/controleEstoque");
var controleEstoque_5 = require("./controller/controleEstoque");
var controleEstoque_6 = require("./controller/controleEstoque");
var controleEstoque_7 = require("./controller/controleEstoque");
var controleEstoque_8 = require("./controller/controleEstoque");
var controleEstoque_9 = require("./controller/controleEstoque");
var promptSync = require("prompt-sync");
var prompt = promptSync();
function verificaEntradaAlfabetica() {
    var controle = true;
    while (true) {
        var entradaAlfabetica = prompt();
        if (entradaAlfabetica === null) {
            console.log("\nEntrada inválida: KeyInterrupt ou entrada null.");
            continue;
        }
        if (/[áéíóúãõâêîôûàèìòù]/i.test(entradaAlfabetica) ||
            /[a-zA-Z\s]/.test(entradaAlfabetica)) {
            return entradaAlfabetica;
        }
        else {
            for (var i = 0; i < entradaAlfabetica.length; i++) {
                var caractere = entradaAlfabetica[i];
                if (!/[áéíóúãõâêîôûàèìòù]/i.test(caractere) ||
                    !/[a-zA-Z\s]/.test(caractere)) {
                    console.log("\nEntrada inválida: forneça uma nova entrada.");
                    controle = false;
                    break;
                }
            }
        }
        if (controle) {
            return entradaAlfabetica;
        }
        else {
            continue;
        }
    }
}
function verificaEntradaNumerica() {
    while (true) {
        try {
            var entradaNumerica = parseFloat(prompt());
            if (entradaNumerica === null) {
                console.log("\nEntrada inválida: KeyInterrupt ou entrada null.");
                continue;
            }
            if (isNaN(entradaNumerica)) {
                throw new Error("\nEntrada inválida: é esperada uma entrada do tipo number.");
            }
            if (entradaNumerica < 0) {
                console.log("\nEntrada negativa: forneça uma entrada válida.");
            }
            else {
                return entradaNumerica;
            }
        }
        catch (erro) {
            console.log("\nO tipo da entrada dada é inesperado: forneça uma entrada válida.");
        }
    }
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var opcao, _nome, _peso, _valor, _quantidade, item, _nomeDoProduto;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!1) return [3 /*break*/, 19];
                    console.log("\nPara adicionar um produto, digite '1'.");
                    console.log("Para remover um produto, digite '2'.");
                    console.log("Para listar os produtos, digite '3'.");
                    console.log("Para ver o valor total do estoque, digite '4'.");
                    console.log("Para ver o peso total do estoque, digite '5'.");
                    console.log("Para ver a média total do valor dos produtos no estoque, digite '6'.");
                    console.log("Para ver a média total do peso dos produtos no estoque, digite '7'.");
                    console.log("Para ver a quantidade total de itens em estoque, digite '8'.");
                    console.log("Para ver a quantidade total de produtos em estoque, digite '9'.");
                    console.log("Para finalizar, digite '0'.");
                    console.log("\nDigite a opção desejada: ");
                    opcao = verificaEntradaNumerica();
                    if (!(opcao === 1)) return [3 /*break*/, 2];
                    console.log("Digite o nome do produto: ");
                    _nome = verificaEntradaAlfabetica();
                    console.log("Digite o peso do produto: ");
                    _peso = verificaEntradaNumerica();
                    console.log("Digite o valor do produto: ");
                    _valor = verificaEntradaNumerica();
                    console.log("Digite a quantidade do produto: ");
                    _quantidade = verificaEntradaNumerica();
                    item = {
                        nome: _nome,
                        peso: _peso,
                        valor: _valor,
                        quantidade: _quantidade,
                    };
                    return [4 /*yield*/, (0, controleEstoque_1.adicionarProduto)(item)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(opcao === 2)) return [3 /*break*/, 4];
                    console.log("Digite o nome do produto que desejas remover do estoque: ");
                    _nomeDoProduto = verificaEntradaAlfabetica();
                    return [4 /*yield*/, (0, controleEstoque_2.removerProduto)(_nomeDoProduto)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(opcao === 3)) return [3 /*break*/, 6];
                    return [4 /*yield*/, (0, controleEstoque_3.listarProdutos)()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    if (!(opcao === 4)) return [3 /*break*/, 8];
                    return [4 /*yield*/, (0, controleEstoque_4.verValorTotal)()];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    if (!(opcao === 5)) return [3 /*break*/, 10];
                    return [4 /*yield*/, (0, controleEstoque_5.verPesoTotal)()];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    if (!(opcao === 6)) return [3 /*break*/, 12];
                    return [4 /*yield*/, (0, controleEstoque_6.verMediaValor)()];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12:
                    if (!(opcao === 7)) return [3 /*break*/, 14];
                    return [4 /*yield*/, (0, controleEstoque_7.verMediaPeso)()];
                case 13:
                    _a.sent();
                    _a.label = 14;
                case 14:
                    if (!(opcao === 8)) return [3 /*break*/, 16];
                    return [4 /*yield*/, (0, controleEstoque_8.verTotalItens)()];
                case 15:
                    _a.sent();
                    _a.label = 16;
                case 16:
                    if (!(opcao === 9)) return [3 /*break*/, 18];
                    return [4 /*yield*/, (0, controleEstoque_9.verTotalProdutos)()];
                case 17:
                    _a.sent();
                    _a.label = 18;
                case 18:
                    if (opcao === 0) {
                        return [3 /*break*/, 19];
                    }
                    return [3 /*break*/, 0];
                case 19: return [2 /*return*/];
            }
        });
    });
}
main();
