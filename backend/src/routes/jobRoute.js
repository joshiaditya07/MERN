import { Router } from "express";
import Job from "../schema/jobSchema.js";


let jobRoute = Router();
jobRoute 
 //localhost:8000/job
 
.route("/")
.post(async(req, res, next) => {
    try {
        let result = await Job.create(req.body)
        res.status(200).json({
            success: true,
            message: "job created successfully",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
})
.get(async(req, res, next) => {
    try {
        let result = await Job.find()
        res.status(200).json({
            success: true,
            message: "Job read successfully",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
});     

jobRoute
.route("/:id") //localhost:8000/Job/id
.get(async (req, res, next) => {
   try {
    let result = await Job.findById(req.params.id)
    res.status(200).json({
        success: true,
        message: "Job read successfully",
        result: result
    })
   } catch (error) {
    res.status(400).json({
        success: false,
        message: error.message
    })
   }
    
})

.patch(async (req, res, next) => {
   
    try {
        let result = await Job.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json({
            success: true,
            message: "Job updated successfully",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
})

.delete(async (req, res, next) => {
    try {
        let result = await Job.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            message: "Job deleted successfully",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
});
export default jobRoute
