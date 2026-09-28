/*
name String
email String
password String
age Number
phone String

*/

import { model, Schema } from "mongoose";

let userSchema = Schema({
    name: {type:String,
            required:[true, "name is required"]
    },
    email:{type:String,
        required:[true, "email is required"]
    },
    password:{type:String,
        required:[true, "password is required"]
    },
    age:{type:Number,
        required:[true, "age is required"]
    },
    phone:{type:String,
        required:[true, "phone is required"]
    }
});

let User = model("User", userSchema)
export default User;


