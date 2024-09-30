import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  userId: { type: String },
  fullName: { type: String },
  password: { type: String },
})


export default mongoose.model("users", UserSchema)
