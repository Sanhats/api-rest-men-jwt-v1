import { User } from "../models/user.js";

export const register = async (req,res) =>{
  const {email, password} = req.body
  try {
    let user = new User({email, password})
    await user.save()

    //jwt token

    return res.json({});
  } catch (error) {
    console.log("code:", error.code);
    //default from mongoose
    if(error.code === 11000){
      return res.status(400).json({error: 'User already exist'})
    }
  }
};

export const login = async (req,res) =>{
  res.json({ok: "login"});
};

