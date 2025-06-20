import Product from "../models/produts.model.js";
import mongoose from "mongoose";

export const getProducts = async(req, res) => { 
    try {
        let product = await Product.find({})
        res.status(200).json({success:true, data: product})
    } catch (error) {
        console.log("server error ", error.message);
        res.status(404).json({success: false, message: "products not found"})
    }
}

export const addProduct = async(req, res) => {
    const product = req.body
    console.log(product);
    if(!product.productName || !product.productPrice || !product.imgLink){
        return res.status(400).json({success: false, message: "Please enter all the details"})
    }
    const newProduct = new Product(product)
    try {

        await newProduct.save()
        res.status(201).json({success:true, data : newProduct})
    } catch (error) {
        console.log("server error", error.message);
        res.status(500).json({success: false, message: "server error"})
    }
  
}

export const updatedProduct = async(req, res) => {
    const {id} = req.params
    const product = req.body
    if(!product.productName || !product.productPrice || !product.imgLink){
        return res.status(400).json({success: false, message: "Please enter all the details"})
    }
    if(!mongoose.Types.ObjectId.isValid){
        res.status(404).json({success: false, message: "Product not found"})
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true})
        res.status(200).json({success:true, data: updatedProduct})
    } catch (error) {
        console.log("server error ", error.message);
        res.status(500).json({success: false, message: "server error"})
    }
}


export const deleteProduct = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid){
        res.status(404).json({success: false, message: "Product not found"})
    }
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message: "Product is deleted"})
    } catch (error) {
        console.log("server error ", error.message);
        res.status(500).json({success: false, message: "server error"})
    }
}