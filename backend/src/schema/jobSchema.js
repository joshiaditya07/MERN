import { model, Schema } from "mongoose";

let jobSchema = Schema({
    title: {type:String,
        required:[true, "title is required"]
    },
    address:{type:String,
        required:[true, "address is required"]
    },
    salary:{type:Number,
        required:[true, "salary is required"]
    },
    description:{type:String,
    }
})

let Job = model("Job", jobSchema)
export default Job;