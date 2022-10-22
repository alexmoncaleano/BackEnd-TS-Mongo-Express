import { Schema, model, Types } from 'mongoose';
import { InvoiceEntity } from '../entity/InvoiceEntity';
const InvoiceScheme = new Schema<InvoiceEntity>({
    
    idInvoice: {type:String,required:true,unique:true,trim:true},
    idUser: {type:String,required:true,unique:true,trim:true},
    idGoodsOne: { type: Types.ObjectId, ref: "Goods", required: true },
    idGoodsTwo: { type: Types.ObjectId, ref: "Goods", required: true },
    totalPrice: {type:Number,required:true,unique:true,trim:true},
    tax: {type:Number,required:true,unique:true,trim:true}
},{versionKey:false});
export default model("Invoice", InvoiceScheme, "Invoice");