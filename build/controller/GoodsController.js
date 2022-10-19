"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GoodsDao_1 = __importDefault(require("../dao/GoodsDao"));
class GoodsController extends GoodsDao_1.default {
    listGoods(req, res) {
        GoodsController.listGoods(res);
    }
    createGoods(req, res) {
        GoodsController.createGoods(req.body, res); //el res es un objeto de tipo respons, es la capacidad que tiene el backend de dar una respuesta.
    }
}
const goodsController = new GoodsController();
exports.default = goodsController;
