"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PerfilDao_1 = __importDefault(require("../dao/PerfilDao"));
class PerfilControlador extends PerfilDao_1.default {
    consulta(req, res) {
        PerfilControlador.consultarPerfiles(res);
    }
    crear(req, res) {
        PerfilControlador.crearPefil(req.body, res); //el res es un objeto de tipo respons, es la capacidad que tiene el backend de dar una respuesta.
    }
}
const perfilControlador = new PerfilControlador();
exports.default = perfilControlador;
