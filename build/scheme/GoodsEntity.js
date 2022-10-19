"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodsEntity = void 0;
class GoodsEntity {
    constructor(nomG, referG, priceG, animalG, descripG) {
        this.nameGoods = nomG;
        this.referenceGoods = referG;
        this.priceGoods = priceG;
        this.animalGoods = animalG;
        this.descripGoods = descripG;
    }
}
exports.GoodsEntity = GoodsEntity;
exports.default = GoodsEntity;
