import { model, Schema } from "mongoose";
import PerfilEntidad from "../entity/PerfilEntity";

const PerfilEsquema = new Schema<PerfilEntidad>(
  {
    nombrePerfil: { type: String, required: true, unique: true, trim: true },
    estadoPerfil: { type: Number, enum: [1, 2], default: 1 }, //enum: permite definir cuales son los valores que puede recibir
  },
  { versionKey: false }
);
export default model("Perfil", PerfilEsquema, "Perfil");
