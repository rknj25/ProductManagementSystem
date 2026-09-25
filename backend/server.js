import express from 'express';
import cors from 'cors';
import dbConnect from './config/db.js';
import authRoutes from './routes/authRoute.js';
import productRoutes from './routes/productRoute.js';

dbConnect();
const port=9999;
const app=express();

app.use(express.urlencoded({extended:true}));
app.use("/uploads",express.static("uploads"));

app.use(express.json());
app.use(cors());
app.use('/api/auth',authRoutes);
app.use('/api/product',productRoutes);



app.listen(port,()=>{
    console.log(`server started at: ${port}`);
    
})