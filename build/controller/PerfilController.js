"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PerfilDao_1 = __importDefault(require("../dao/PerfilDao"));
class PerfilControlador extends PerfilDao_1.default {
    listPerfil(req, res) {
        PerfilControlador.listPerfil(res);
    }
    createPerfil(req, res) {
        PerfilControlador.createPefil(req.body, res); //el res es un objeto de tipo respons, es la capacidad que tiene el backend de dar una respuesta.
    }
    deletePerfil(req, res) {
        PerfilControlador.deletePerfil(req.params.codigo, res);
    }
    updatePerfil(req, res) {
        PerfilControlador.updatePerfil(req.params.codigo, req.body, res);
    }
}
const perfilControlador = new PerfilControlador();
exports.default = perfilControlador;
