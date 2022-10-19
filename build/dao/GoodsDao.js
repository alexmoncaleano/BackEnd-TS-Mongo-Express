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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GoodsScheme_1 = __importDefault(require("../scheme/GoodsScheme"));
class GoodsDao {
    static listGoods(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield GoodsScheme_1.default.find().sort({ _id: -1 });
            res.status(200).json(datos);
        });
    }
    static createGoods(parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const existe = yield GoodsScheme_1.default.findOne(parametros);
            if (existe) {
                res.status(400).json({ respuesta: "El articulo ya existe" });
            }
            else {
                const objGoods = new GoodsScheme_1.default(parametros);
                objGoods.save((miError, miObjeto) => {
                    if (miError) {
                        res.status(400).json({ respuesta: "No se puede crear el articulo" });
                    }
                    else {
                        res
                            .status(200)
                            .json({
                            respuesta: "Articulo creado exitosamente",
                            codigo: miObjeto._id,
                        });
                    }
                });
            }
        });
    }
}
exports.default = GoodsDao;
