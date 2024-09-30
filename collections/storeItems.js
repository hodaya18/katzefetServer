import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  makat: { type: Number },
  name: { type: String },
  img: { type: String },
  cost: { type: Number },
  stockAmount: { type: Number },
  category: { type: String },
})


export default mongoose.model("storeItems", UserSchema)
