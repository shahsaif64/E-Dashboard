import express from 'express';
import bcrypt from 'bcryptjs';
import userModel from '../models/user.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
let Jwt_secret = process.env.JWT_SECRET_KEY;


const router = express.Router();
router.post('/auth/signup', async(req, res) => {
           let success = false;
    try {
        const pass= req.body.password;
    const salt = bcrypt.genSaltSync(10);
    const hashpassword = bcrypt.hashSync(pass, salt);
    let user =await userModel.create({
        fname:req.body.fname,
        email:req.body.email,
        hashpass:hashpassword
    })
     success=true;
     res.send({success});


    } catch (error) {
        res.status(500).send({error: error});
    }
    
})

router.post('/auth/signin',async (req, res) => {
        let success = false;
        try {
            let user= await userModel.findOne({email:req.body.email});
            if(!user){
             return res.status(404).send({error:"user does not exist"})
            }
            // console.log(user.hashpass,Jwt_secret);
            
            let comparePass= bcrypt.compareSync(req.body.password, user.hashpass);
            if(!comparePass){
                return res.status(404).send({error:"password is incorrect"});
            }
            const token = jwt.sign({ id: user.id }, Jwt_secret);
            success=true;
            res.send({success,token});
            

        } catch (error) {
            
          res.status(500).send("Internal server error occured")
        }
   

})

export default router;