import { Schema, Types, model } from 'mongoose';
import { SelectionEntity } from './../entity/SelectionEntity';

const SelectionScheme = new Schema<SelectionEntity>(
    {
        idUser:{type: Types.ObjectId, ref: "User", required: true },
        idGoods:{type: Types.ObjectId, ref: "Goods", required: true },
        amountGoods:{type:Number, required: true},
        priceTotal:{type:Number, required: true}
},{versionKey:false});
export default model("Selection", SelectionScheme, "Selection");