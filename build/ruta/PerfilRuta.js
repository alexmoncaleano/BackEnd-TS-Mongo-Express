"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PerfilControlador_1 = __importDefault(require("../controlador/PerfilControlador"));
class PerfilRuta {
    constructor() {
        this.rutaApiPerfil = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaApiPerfil.get("/list", PerfilControlador_1.default.consulta);
        this.rutaApiPerfil.post("/create", PerfilControlador_1.default.crear);
    }
}
const perfilRuta = new PerfilRuta();
exports.default = perfilRuta.rutaApiPerfil;
