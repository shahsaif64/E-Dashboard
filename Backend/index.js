import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRouter from './routes/auth.js';
import productRouter from './routes/products.js';


//CONFIGURATION

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



//ROUTES
app.use('/api', authRouter)
app.use('/api', productRouter)
app.use('*', (req, res)=>{
    res.send("404 Page Not Found");
})
app.use("/uploads",express.static("./uploads"));


//MONGOOSE SETUP
const PORT= process.env.PORT;
const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{app.listen(PORT , ()=>console.log(`server listening on ${PORT}`))})
.catch((err)=>{console.log("Error Occured "+err)});

