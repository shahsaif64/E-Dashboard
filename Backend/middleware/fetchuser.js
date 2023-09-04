import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const fetchuser = async(req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        return res.status(401).json({message:"Invalid token or no token"})
    } 
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user=data.id;
        
        next();

    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    
}

export default fetchuser;