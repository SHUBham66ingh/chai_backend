
// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path : './env'
})

connectDB()























// import exprees from "express"

// const app = express();

// (async ()=>{
//     try{
//    await  mongoose.connect('${process.env.MONGODB_URL}/${DB_NAME}')
//    app.on("error" ,()=>{
// console.log("ERROR" , err)
// throw err
//    })
  
//    app.listen(process.env.PORT, ()=>{
//     console.log(`server connected at port ${process.env.PORT}`)
//    })  
//     }
//     catch(error){
//         console.log('ERRROR'  , error);
//         throw err
//     }
// })()