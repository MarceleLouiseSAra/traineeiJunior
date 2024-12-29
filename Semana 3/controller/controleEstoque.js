"use strict";
// O controller vai ser responsável pelas funções principais do programa, basicamente todas as histórias de usuário.
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
exports.adicionarProduto = adicionarProduto;
exports.removerProduto = removerProduto;
exports.listarProdutos = listarProdutos;
exports.verValorTotal = verValorTotal;
exports.verPesoTotal = verPesoTotal;
exports.verMediaValor = verMediaValor;
exports.verMediaPeso = verMediaPeso;
exports.verTotalItens = verTotalItens;
exports.verTotalProdutos = verTotalProdutos;
var estoqueService_1 = require("../service/estoqueService");
function adicionarProduto(item) {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, estoqueService_1.default.criarItem(item)];
                case 1:
                    _a.sent();
                    console.log("\nItem adicionado com sucesso!");
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log("\nErro ao adicionar produto ao estoque: ", error_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function removerProduto(nomeDoProduto) {
    return __awaiter(this, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, estoqueService_1.default.removerItem(nomeDoProduto)];
                case 1:
                    _a.sent();
                    console.log("\nProduto removido com sucesso!");
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.log("\nErro ao remover produto do estoque: ", error_2.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function listarProdutos() {
    return __awaiter(this, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, estoqueService_1.default.listarItens()];
                case 1:
                    _a.sent();
                    console.log("\nProdutos listados com sucesso!");
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.log("\nErro ao listar produtos em estoque: ", error_3.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function verValorTotal() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, error_4;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 2, , 3]);
                    _b = (_a = console).log;
                    _c = ["R$ "];
                    return [4 /*yield*/, estoqueService_1.default.calcularValorTotal()];
                case 1:
                    _b.apply(_a, _c.concat([_d.sent()]));
                    console.log("\nValor total dos produtos em estoque calculado com sucesso.");
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _d.sent();
                    console.log("\nErro ao calcular valor total do estoque: ", error_4.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function verPesoTotal() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, error_5;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    _b = (_a = console).log;
                    return [4 /*yield*/, estoqueService_1.default.calcularPesoTotal()];
                case 1:
                    _b.apply(_a, [_c.sent(), "Kg"]);
                    console.log("\nPeso total dos produtos em estoque calculado com sucesso!");
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _c.sent();
                    console.log("\nErro ao calcular peso total do estoque: ", error_5.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function verMediaValor() {
    return __awaiter(this, void 0, void 0, function () {
        var error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, estoqueService_1.default.calcularMediaValor()];
                case 1:
                    _a.sent();
                    console.log("\nMédia total do valor dos produtos em estoque calculado com sucesso!");
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _a.sent();
                    console.log("\nErro ao calcular média total do valor do estoque: ", error_6.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function verMediaPeso() {
    return __awaiter(this, void 0, void 0, function () {
        var error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, estoqueService_1.default.calcularMediaPeso()];
                case 1:
                    _a.sent();
                    console.log("\nMédia total do peso dos produtos em estoque calculado com sucesso!");
                    return [3 /*break*/, 3];
                case 2:
                    error_7 = _a.sent();
                    console.log("\nErro ao calcular média total do peso do estoque: ", error_7.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function verTotalItens() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, error_8;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    _b = (_a = console).log;
                    return [4 /*yield*/, estoqueService_1.default.calcularQuantidadeTotalDeItens()];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    console.log("\nQuantidade total de itens em estoque calculado com sucesso!");
                    return [3 /*break*/, 3];
                case 2:
                    error_8 = _c.sent();
                    console.log("\nErro ao calcular quantidade total de itens do estoque: ", error_8.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function verTotalProdutos() {
    return __awaiter(this, void 0, void 0, function () {
        var error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, estoqueService_1.default.calcularQuantidadeTotalDeProdutos()];
                case 1:
                    _a.sent();
                    console.log("\nQuantidade total de produtos em estoque calculado com sucesso!");
                    return [3 /*break*/, 3];
                case 2:
                    error_9 = _a.sent();
                    console.log("\nErro ao calcular quantidade total de produtos do estoque: ", error_9.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
