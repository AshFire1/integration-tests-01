import express, { Request,Response } from "express";
import {prismaClient} from "./db";
export const app=express();


app.use(express.json());

app.post("/sum",async (req:Request,res:Response):Promise<void>=>{

    const a=req.body.a;
    const b=req.body.b;
    if(a>100000000 || b>10000000)
    {
        res.status(400).json({error:"Number too large"});
        return;
    }
    const answer=a+b;
    const request=await prismaClient.request.create({
        data:{
            a:a,
            b:b,
            answer:answer,
            type:"ADD"
        }
    })
    res.json({answer:answer,id:request.id});
})