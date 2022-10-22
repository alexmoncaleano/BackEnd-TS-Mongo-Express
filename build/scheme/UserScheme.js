"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserScheme = new mongoose_1.Schema({
    idUser: { type: String, required: true, unique: true, trim: true },
    typeIdUser: { type: String, required: true, trim: true },
    nameUser: { type: String, required: true, trim: true },
    lastNameUser: { type: String, required: true, trim: true },
    emailUser: { type: String, required: true, unique: true, trim: true, lowercase: true },
    telephoneUser: { type: String, required: true, trim: true },
    estadeUser: { type: Number, enum: [1, 2], default: 1 },
    dateUser: { type: Date, default: Date.now },
    userUser: { type: String, required: true, unique: true, trim: true },
    passwordUser: { type: String, required: true },
    codPerfil: { type: mongoose_1.Types.ObjectId, ref: "Perfil", required: true }
}, { versionKey: false });
exports.default = (0, mongoose_1.model)("User", UserScheme, "User");
