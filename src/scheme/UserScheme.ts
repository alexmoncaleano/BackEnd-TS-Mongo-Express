import { Schema, model } from 'mongoose';
import { UserEntity } from '../entity/UserEntity';

const UserScheme = new Schema<UserEntity>({
    
    idUser:{type:String,required:true,unique:true,trim:true},
    typeIdUser:{type:String,required:true,unique:true,trim:true},
    nameUser:{type:String,required:true,unique:true,trim:true},
    lastNameUser:{type:String,required:true,unique:true,trim:true},
    emailUser:{type:String,required:true,unique:true,trim:true},
    telephoneUser:{type:String,required:true,unique:true,trim:true}

},{versionKey:false});
export default model("User", UserScheme, "User");