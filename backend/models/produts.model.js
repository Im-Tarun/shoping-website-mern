import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName : {
        type: String,
        required: true
    },
    productPrice : {
        type: Number,
        required: true
    },
    imgLink : {
        type: String,
        required: true
    }
    },{
        timestamps: true // createAt and updateAt
    })

const Product = mongoose.model("Product", productSchema);
export default Product