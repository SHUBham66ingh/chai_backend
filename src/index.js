import {app} from "./app.js"
// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path : './.env'
})

connectDB()
.then(()=>{
   app.listen(process.env.PORT || 6000 , ()=>{
     console.log(`server is connected at ${process.env.PORT}`);
   })
})
.catch((err)=>{
    console.log('MONGO DB connection failed ' , err)
}
)























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