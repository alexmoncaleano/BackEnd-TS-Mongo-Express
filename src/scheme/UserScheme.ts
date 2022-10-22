import { Request } from "express";
import { Schema, model, Types } from "mongoose";
import { UserEntity } from "../entity/UserEntity";

const UserScheme = new Schema<UserEntity>(
  {
    idUser: { type: String, required: true, unique: true, trim: true },
    typeIdUser: { type: String, required: true, trim: true },
    nameUser: { type: String, required: true, trim: true },
    lastNameUser: { type: String, required: true, trim: true },
    emailUser: { type: String, required: true, unique: true, trim: true, lowercase: true}, //lowercase: pasa todo a minusculas
    telephoneUser: { type: String, required: true, trim: true },
    estadeUser: { type: Number, enum: [1, 2], default: 1 },
    dateUser: { type: Date, default: Date.now },
    userUser: { type: String, required: true, unique: true, trim: true },
    passwordUser: { type: String, required: true },
    codPerfil: { type: Types.ObjectId, ref: "Perfil", required: true }
  },
  { versionKey: false }
);
export default model("User", UserScheme, "User");
