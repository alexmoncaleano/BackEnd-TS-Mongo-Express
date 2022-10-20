"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PerfilDao_1 = __importDefault(require("../dao/PerfilDao"));
class PerfilControlador extends PerfilDao_1.default {
    listPerfil(req, res) {
        PerfilControlador.consultarPerfiles(res);
    }
    createPerfil(req, res) {
        PerfilControlador.crearPefil(req.body, res); //el res es un objeto de tipo respons, es la capacidad que tiene el backend de dar una respuesta.
    }
    deletePerfil(req, res) {
        PerfilControlador.eliminarPerfil(req.params.codigo, res);
    }
}
const perfilControlador = new PerfilControlador();
exports.default = perfilControlador;
