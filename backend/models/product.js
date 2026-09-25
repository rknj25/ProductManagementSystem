import mongoose from "mongoose";
import user from "./user.js";

const proSchema=mongoose.Schema({
    name:{type:String,required:true},
    price:{type:String,required:true},
    category:{type:String,required:true},
    description:{type:String,required:true},
    qnty:{type:String,required:true},
    image:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:user,required:true}
})
const product=mongoose.model("product",proSchema);

export default product;