import express from 'express';
import productModel from '../models/product.js';
import multer from 'multer';
import moment from 'moment';
import fetchuser from '../middleware/fetchuser.js';


const router = express.Router();

// image storage
const imgConfig= multer.diskStorage({
    destination:(req,file, callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file, callback)=>{
        callback(null, `${Date.now()}-${file.originalname}`)
    }
})

//image filter
const isImage=(req,file, callback)=>{
    if(file.mimetype.startsWith('image')){
        callback(null, true)
    }else{
        callback(new Error("only image is allowed"))
    }
}

const upload = multer({
    storage:imgConfig,
    fileFilter:isImage
}).single("photo")


router.post('/products/add',upload,fetchuser,async(req,res)=>{
       let success = false;
       const date = moment(new Date()).format("YYYY-MM-DD");
       const {filename}= req.file;
       const userId=req.user;
       const {sku,title,brand,price,category,description}= req.body;

       if(!userId){
        return res.status(400).json({message:"you are not authorized to add a product"});
       }
         if(!filename){
            return res.status(400).json({message:"Something went wrong with your file upload"});
         }
      try {

        const product = await productModel.create({
            userid:userId,
            sku:sku,
            title:title,
            price:price,
            brand:brand,
            category:category,
            desc:description,
            imgpath:filename,
            date:date

        });

        success= true;
        res.status(201).json({success,product});
        
      } catch (error) {
        res.status(400).json({status:401,error});
      }
})



export default router;