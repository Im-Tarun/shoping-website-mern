import express from "express";
import { addProduct, deleteProduct, getProducts, updatedProduct } from "../controllers/product.controller.js";


const router = express.Router()

router.get('/', getProducts);
router.post('/', addProduct);
router.put('/:id', updatedProduct);
router.delete('/:id', deleteProduct);

export default router