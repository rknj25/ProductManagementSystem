import express from 'express';
import user from '../models/user.js';
import bcrypt from 'bcrypt';

export const register=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const extUser=await user.findOne({email});
        if(extUser){
            return res.status(401).json({message:"Email already taken"});
        }
        const passhash=await bcrypt.hash(password,10);
        await user.create({
            name:name,
            email:email,
            password:passhash
        })
        return res.status(200).json({message:"User Register Successfully"});
    }
    catch{
        return res.status(500).json({message:"Error in Registration"});
    }
}

export const login=async(req,res)=>{
    try{    
        const {email,password}=req.body;

        const extEmail=await user.findOne({email})
        if(!extEmail){
            return res.status(401).json({message:"email not registered.."});
        }
        const matchPass=await bcrypt.compare(password,extEmail.password);
        if(!matchPass){
            return res.status(401).json({message:"Password not Matched.."});
        }
        return res.status(200).json({message:"Login successfully.."});

    }
    catch{
        return res.status(500).json({message:"Error in login"})
    }
}
