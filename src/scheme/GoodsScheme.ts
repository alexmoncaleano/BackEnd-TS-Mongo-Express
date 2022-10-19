import { Schema, model } from 'mongoose';
import { GoodsEntity } from '../entity/GoodsEntity';
const GoodsScheme = new Schema<GoodsEntity>({
    nameGoods:{type:String,required:true,unique:true,trim:true},
    referenceGoods:{type:String,required:true,unique:true,trim:true},
    priceGoods:{type:Number,required:true,unique:true,trim:true},
    descripGoods:{type:String,required:true,unique:true,trim:true},
    animalGoods:{type:String,required:true,unique:true,trim:true}

},{versionKey:false});
export default model("Goods", GoodsScheme, "Goods");
