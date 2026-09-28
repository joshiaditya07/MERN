import { Router } from "express";

let reviewRoute = Router();
reviewRoute
.route('/')

.post((req,res,next) => {
    res.json({success: true, message: "review created successfully" });
})

.get((req,res,next) => {
    res.json({success: true, message: "review read successfully" });
})

reviewRoute
.route('/:id')
.get((req, res, next) => {
    res.json({success: true, message: "review read successfully" });
})

.patch((req,res,next) =>{
    res.json({success:true, message: "review updated successfully"})
})
.delete((req,res,next) =>{
    res.json({success:true, message: "review deleted successfully"})
})

export default reviewRoute