"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserScheme = new mongoose_1.Schema({
    idUser: { type: String, required: true, unique: true, trim: true },
    typeIdUser: { type: String, required: true, unique: true, trim: true },
    nameUser: { type: String, required: true, unique: true, trim: true },
    lastNameUser: { type: String, required: true, unique: true, trim: true },
    emailUser: { type: String, required: true, unique: true, trim: true },
    telephoneUser: { type: String, required: true, unique: true, trim: true }
}, { versionKey: false });
exports.default = (0, mongoose_1.model)("User", UserScheme, "User");
