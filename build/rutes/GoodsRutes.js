"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GoodsController_1 = __importDefault(require("../controller/GoodsController"));
class GoodsRuta {
    //iniciamos la variable de ruta
    constructor() {
        this.rutaApiGoods = (0, express_1.Router)();
        this.configrRutesGoods();
    }
    ;
    configrRutesGoods() {
        this.rutaApiGoods.get("/listGoods", GoodsController_1.default.listGoods);
        this.rutaApiGoods.post("/createGoods", GoodsController_1.default.createGoods);
    }
}
;
const goodsRuta = new GoodsRuta();
exports.default = goodsRuta.rutaApiGoods;
