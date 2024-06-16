import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
 
cloudinary.config({ 
cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
api_key: process.env.CLOUDINARY_API_KEY, 
api_secret:  process.env.CLOUDINARY_API_SECRET
    });

const uploadOnCloudinary = async (localFilePath)=>{
   try{ 
    if(!localPath) return null
   const response= await  cloudinary.uploader.upload(localFilePath , {
      resource_type:"auto"
    })
    //file has been uploaded
    console.log("file is succesfully uploaded",response.url)
    return response
   }
   catch(err){
     fs.unlinkSync(localFilePath)
    }
}