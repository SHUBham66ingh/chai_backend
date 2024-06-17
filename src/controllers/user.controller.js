import {asyncHandler}  from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async(req,res)=>{
   // get user from frontend
   // validation - not empty
   //  check if uer already exists: useranam, email
   // check for images and avatar
   // upload them to cloudinary , avatar
   // create user onject - create entry in db
   // remove password and refresh token 
   //check for user creation
   // return res

     const {fullName , email , username , password} =req.body
     console.log("email" , email)





})

export{registerUser,}