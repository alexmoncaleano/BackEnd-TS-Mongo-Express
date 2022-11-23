import { Request } from "express";
import { Schema, model, Types } from "mongoose";
import { InmuebleEntity } from "../entity/InmuebleEntity";

const InmuebleScheme = new Schema<InmuebleEntity>(
  {
    address: { type: String, unique: true, trim: true },
    price: { type: Number,  trim: true },
    city: { type: String, required: true, trim: true },
    bedrooms: { type: Number, required: true, unique: true, trim: true, lowercase: true}, //lowercase: pasa todo a minusculas
    bathrooms: { type: Number, trim: true },
    location: { type: Types.ObjectId, ref: "Location"}
  },
  { versionKey: false }
);
export default model("Inmueble", InmuebleScheme, "Inmueble");