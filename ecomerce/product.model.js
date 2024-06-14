import mongoose from "mongoose";

const productSchema = new mongoose({
    description : {
        required: true,
        type: string
    },

    productImage : {
        
    }
} , {timestamps:true})



export const Product =   mongoose.model("Product")