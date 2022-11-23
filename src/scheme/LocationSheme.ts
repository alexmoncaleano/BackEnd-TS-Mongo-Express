import { LocationEntity } from './../entity/LocationEntity';
import { model, Schema } from "mongoose";

const LocationSchema = new Schema<LocationEntity>(
  {
    type: { type: String, required: true, trim: true },
    coordinates: { type: Array<Number>,  default: [0,0] }, 
  },
  { versionKey: false }
);
export default model("Location", LocationSchema, "Location");