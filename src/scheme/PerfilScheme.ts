import { model, Schema } from "mongoose";
import PerfilEntidad from "../entity/PerfilEntity";

const PerfilEsquema = new Schema<PerfilEntidad>({
    nombrePerfil:{type:String,required:true,unique:true,trim:true}
},{versionKey:false});
export default model("Perfil",PerfilEsquema,"Perfil");