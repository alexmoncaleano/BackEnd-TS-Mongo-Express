"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PerfilControlador_1 = __importDefault(require("../controller/PerfilControlador"));
class PerfilRuta {
    constructor() {
        this.rutaApiPerfil = (0, express_1.Router)();
        this.configRutesPerfil();
    }
    configRutesPerfil() {
        this.rutaApiPerfil.get("/list", PerfilControlador_1.default.listPerfil);
        this.rutaApiPerfil.post("/create", PerfilControlador_1.default.createPerfil);
        this.rutaApiPerfil.delete("/delete/:codigo", PerfilControlador_1.default.deletePerfil);
    }
}
const perfilRuta = new PerfilRuta();
exports.default = perfilRuta.rutaApiPerfil;