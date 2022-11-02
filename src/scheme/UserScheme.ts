import { Request } from "express";
import { Schema, model, Types } from "mongoose";
import { UserEntity } from "../entity/UserEntity";

const UserScheme = new Schema<UserEntity>(
  {
    idUser: { type: String, unique: true, trim: true },
    typeIdUser: { type: String,  trim: true },
    nameUser: { type: String, required: true, trim: true },
    emailUser: { type: String, required: true, unique: true, trim: true, lowercase: true}, //lowercase: pasa todo a minusculas
    telephoneUser: { type: String, trim: true },
    estadeUser: { type: Number, enum: [1, 2], default: 1 },
    dateUser: { type: Date, default: Date.now },
    passwordUser: { type: String, required: true },
    codPerfil: { type: Types.ObjectId, ref: "Perfil"}
  },
  { versionKey: false }
);
export default model("User", UserScheme, "User");
