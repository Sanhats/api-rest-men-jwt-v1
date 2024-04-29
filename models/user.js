import {Schema, model} from "mongoose";

const userSchema = new Schema({
  email:{
    type: String,
    require: true,
    trim: true,
    unique: true,
    lowercase: true,
    inde: { unique: true },

  },
  password:{
    type: String,
    require: true,

  }
})

export const User = model('user', userSchema)