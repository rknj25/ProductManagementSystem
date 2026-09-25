import mongoose from "mongoose";

const dbConnect=async()=>{
    try{
        await mongoose.connect("mongodb+srv://Rupesh_knj:Prisha1612@node.lhpeyea.mongodb.net/ProductManagement?appName=Node");
        console.log("Database connected..");
        
    }
    catch{
        console.log("Database not Connected..");
        
    }
}

export default dbConnect;

