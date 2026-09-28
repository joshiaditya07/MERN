import { Router } from "express";
import Product from "../schema/productSchema.js";

let productRoute = Router();
productRoute
.route('/')
.post(async (req,res,next) => {
    try {
         let result = await Product.create(req.body)
         res.status(200).json({
            success: true, 
            message: "product created successfully",
            result: result,    
    });
        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
        
    }

   
    }
)
.get(async(req,res,next) => {
    // res.json({success: true, message: "product read successfully" });
    try {
        let result = await Product.find()
        res.status(200).json({
            success: true,
            message: "product read successfully",
            result: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
        
    }

})

productRoute
.route('/:id') //localhost:3000/product/1234
//    get single product by id
.get(async (req, res, next) => {
    try {
        let result = await Product.findById(req.params.id)
        res.status(200).json({
            success:true,
            message: "Product read successfully",
            result: result
        })
        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
        
    }
})

.patch(async (req,res,next) =>{
    try {
        let result = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            success:true,
            message: "Product updated successfully",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
})

.delete(async (req,res,next) =>{
    try {
        let result = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success:true,
            message: "Product deleted successfully",
            result: result
        }) 
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
})

/*
model => Product 
schema
    name = string
    price = number
    quantity = number
    description = string

*/


export default productRoute