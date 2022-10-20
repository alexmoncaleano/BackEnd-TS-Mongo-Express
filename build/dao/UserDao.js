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
const UserScheme_1 = __importDefault(require("../scheme/UserScheme"));
class UserDao {
    static listUser(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield UserScheme_1.default.find().sort({ _id: -1 });
            res.status(200).json(datos);
        });
    }
    static createUser(parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const existe = yield UserScheme_1.default.findOne(parametros);
            if (existe) {
                res.status(400).json({ respuesta: "El usuario ya existe" });
            }
            else {
                const objUser = new UserScheme_1.default(parametros);
                objUser.save((miError, miObjeto) => {
                    if (miError) {
                        res.status(400).json({ respuesta: "No se puede crear el usuario" });
                    }
                    else {
                        res.status(200).json({
                            respuesta: "Usuario creado exitosamente",
                            codigo: miObjeto._id,
                        });
                    }
                });
            }
        });
    }
    static deleteUser(parametro, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const existe = yield UserScheme_1.default.findById(parametro);
            if (existe) {
                UserScheme_1.default.deleteOne({ parametro }, (miError, miObjeto) => {
                    if (miError) {
                        res
                            .status(400)
                            .json({ respuesta: "No se puede eliminar el Usuario" });
                    }
                    else {
                        res.status(200).json({
                            respuesta: "Usuario eliminado correctamente",
                            eliminado: miObjeto.deletedCount,
                        });
                    }
                });
            }
            else {
                res.status(400).json({ respuesta: "No existe el Usuario" });
            }
        });
    }
}
exports.default = UserDao;
