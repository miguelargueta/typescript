"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Module1_1 = require("./src/modules/Module1");
// cada clase o método que exportemos 
// tiene que ser separado por una coma
const MultipleExports_1 = require("./src/modules/MultipleExports");
const DefaultExport_1 = __importDefault(require("./src/modules/DefaultExport"));
let myModule1 = new Module1_1.Module1();
myModule1.print();
let myMC1 = new MultipleExports_1.MultpleClass1();
let myMC2 = new MultipleExports_1.MultpleClass2();
let modDefault = (0, DefaultExport_1.default)(1, 2);
console.log(modDefault);
