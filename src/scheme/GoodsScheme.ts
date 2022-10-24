import { Schema, model } from 'mongoose';
import { GoodsEntity } from '../entity/GoodsEntity';
const GoodsScheme = new Schema<GoodsEntity>({
    nameGoods:{type:String,required:true,trim:true},
    referenceGoods:{type:String,required:true,unique:true,trim:true},
    priceGoods:{type:Number,required:true,trim:true},
    descripGoods:{type:String,required:true,trim:true},
    animalGoods:{type:String,required:true,trim:true},
    amountGoods:{type:Number,required:true,trim:true},
    stocktakingGoods:{type:Number,required:true,trim:true},
    imagenGoods:{type:String}

},{versionKey:false});
export default model("Goods", GoodsScheme, "Goods");
