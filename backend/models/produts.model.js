import mongoose from "mongoose";
import { float } from "webidl-conversions";

const productSchema = new mongoose.Schema({
    productName : {
        type: String,
        require: true
    },
    productPrice : {
        type: Number,
        require: true
    },
    imgLink : {
        type: String,
        require: true
    }
    },{
        timestamps: true // createAt and updateAt
    })

const Product = mongoose.model("Product", productSchema);
export default Product