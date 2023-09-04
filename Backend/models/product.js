import mongoose from 'mongoose';
let productSchema=new mongoose.Schema({
        userid:{type:String,required:true},
        sku:{type:String , required:true},
        title:{type:String , required:true},
        price:{type:Number , required:true},
        brand:{type:String , required:true},
        category:{type:String , required:true},
        desc:{type:String , required:true},
        imgpath:{type:String , required:true},
        date:{type:Date}
})
const productModel= new mongoose.model('Product',productSchema);
export default productModel;