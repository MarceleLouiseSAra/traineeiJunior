"use strict";
// No nosso service, vamos fazer as chamadas diretas no csv e operações.
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
var readCSV_1 = require("../model/readCSV");
var writeCSV_1 = require("../model/writeCSV");
var fs = require("fs");
var filePath = "./model/estoque.csv";
var estoqueService = /** @class */ (function () {
    function estoqueService() {
    }
    estoqueService.criarItem = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var csvContent, header, newCSV;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof item.nome != "string" ||
                            isNaN(item.peso) ||
                            isNaN(item.valor) ||
                            isNaN(item.quantidade))) return [3 /*break*/, 1];
                        throw new Error("\nOs tipos das entradas fornecidas não são os esperados.");
                    case 1: return [4 /*yield*/, (0, readCSV_1.default)(filePath)];
                    case 2:
                        csvContent = _a.sent();
                        if (!(csvContent.length == 0)) return [3 /*break*/, 4];
                        header = "nome,peso,valor,quantidade";
                        fs.writeFile(filePath, header, function (err) {
                            if (err) {
                                console.error("Erro ao escrever no arquivo:", err);
                            }
                        });
                        return [4 /*yield*/, (0, writeCSV_1.default)(filePath, [item])];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 4: return [4 /*yield*/, (0, readCSV_1.default)(filePath)];
                    case 5:
                        newCSV = _a.sent();
                        newCSV.push(item);
                        return [4 /*yield*/, (0, writeCSV_1.default)(filePath, newCSV)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    estoqueService.removerItem = function (nomeDoProduto) {
        return __awaiter(this, void 0, void 0, function () {
            var csvContent, newCSV, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, readCSV_1.default)(filePath)];
                    case 1:
                        csvContent = _a.sent();
                        if (!(csvContent.length == 0)) return [3 /*break*/, 2];
                        throw new Error("\nNão há produtos no estoque.");
                    case 2:
                        newCSV = [];
                        if (csvContent.length == 0) {
                            throw new Error("\nNão há produtos no estoque.");
                        }
                        else {
                            for (i = 0; i < csvContent.length; i++) {
                                if (csvContent[i].nome != nomeDoProduto) {
                                    newCSV.push(csvContent[i]);
                                }
                            }
                        }
                        return [4 /*yield*/, (0, writeCSV_1.default)(filePath, newCSV)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    estoqueService.listarItens = function () {
        return __awaiter(this, void 0, void 0, function () {
            var csvContent, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, readCSV_1.default)(filePath)];
                    case 1:
                        csvContent = _a.sent();
                        for (i = 0; i < csvContent.length; i++) {
                            console.log(csvContent[i]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    estoqueService.calcularValorTotal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var csvContent, valorTotal, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, readCSV_1.default)(filePath)];
                    case 1:
                        csvContent = _a.sent();
                        valorTotal = 0;
                        for (i = 0; i < csvContent.length; i++) {
                            if (csvContent[i].valor !== null &&
                                csvContent[i].valor !== undefined &&
                                csvContent[i].quantidade !== null &&
                                csvContent[i].quantidade !== undefined) {
                                valorTotal += csvContent[i].valor * csvContent[i].quantidade;
                            }
                            else {
                                throw new Error("\nValores nulos ou indefinidos.");
                            }
                        }
                        return [2 /*return*/, valorTotal];
                }
            });
        });
    };
    estoqueService.calcularPesoTotal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var csvContent, pesoTotal, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, readCSV_1.default)(filePath)];
                    case 1:
                        csvContent = _a.sent();
                        pesoTotal = 0;
                        for (i = 0; i < csvContent.length; i++) {
                            if (csvContent[i].peso !== null &&
                                csvContent[i].peso !== undefined &&
                                csvContent[i].quantidade !== null &&
                                csvContent[i].quantidade !== undefined) {
                                pesoTotal += csvContent[i].peso * csvContent[i].quantidade;
                            }
                            else {
                                throw new Error("\nValores nulos ou indefinidos.");
                            }
                        }
                        return [2 /*return*/, pesoTotal];
                }
            });
        });
    };
    estoqueService.calcularQuantidadeTotal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var csvContent, quantidadeTotal, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, readCSV_1.default)(filePath)];
                    case 1:
                        csvContent = _a.sent();
                        quantidadeTotal = 0;
                        for (i = 0; i < csvContent.length; i++) {
                            if (csvContent[i].quantidade !== null &&
                                csvContent[i].quantidade !== undefined) {
                                quantidadeTotal += csvContent[i].quantidade;
                            }
                            else {
                                throw new Error("\nValores nulos ou indefinidos.");
                            }
                        }
                        return [2 /*return*/, quantidadeTotal];
                }
            });
        });
    };
    estoqueService.calcularMediaValor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var quantidadeTotal, valorTotal, mediaValor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.calcularQuantidadeTotal()];
                    case 1:
                        quantidadeTotal = _a.sent();
                        return [4 /*yield*/, this.calcularValorTotal()];
                    case 2:
                        valorTotal = _a.sent();
                        mediaValor = valorTotal / quantidadeTotal;
                        console.log(mediaValor);
                        return [2 /*return*/];
                }
            });
        });
    };
    estoqueService.calcularMediaPeso = function () {
        return __awaiter(this, void 0, void 0, function () {
            var quantidadeTotal, valorPeso, mediaPeso;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.calcularQuantidadeTotal()];
                    case 1:
                        quantidadeTotal = _a.sent();
                        return [4 /*yield*/, this.calcularPesoTotal()];
                    case 2:
                        valorPeso = _a.sent();
                        mediaPeso = valorPeso / quantidadeTotal;
                        console.log(mediaPeso);
                        return [2 /*return*/];
                }
            });
        });
    };
    return estoqueService;
}());
exports.default = estoqueService;
