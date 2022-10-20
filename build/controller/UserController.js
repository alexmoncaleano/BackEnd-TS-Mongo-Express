"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDao_1 = __importDefault(require("../dao/UserDao"));
class UserController extends UserDao_1.default {
    listUser(req, res) {
        UserController.listUser(res);
    }
    createUser(req, res) {
        UserController.createUser(req.body, res); //el res es un objeto de tipo respons, es la capacidad que tiene el backend de dar una respuesta.
    }
    deleteUser(req, res) {
        UserController.deleteUser(req.params.codigo, res);
    }
}
const userController = new UserController();
exports.default = userController;
