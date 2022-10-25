import mongoose, { Schema, model, Types } from 'mongoose';
import { DetailEntity } from '../entity/DetailEntity';
import { GoodsEntity } from '../entity/GoodsEntity';

const DetailScheme = new Schema<DetailEntity>(
    {
    idUser : {type: Types.ObjectId, ref: "User", required: true },
    list: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Selection"
        }
      ]

},{versionKey:false});
export default model("Detail", DetailScheme, "Detail");
