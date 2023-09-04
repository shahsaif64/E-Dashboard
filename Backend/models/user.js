import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    fname:{type:String, required:true},
    email:{type:String, required:true},
    hashpass:{type:String, required:true}
})

const userModel=new mongoose.model('users', userSchema);

export default userModel;