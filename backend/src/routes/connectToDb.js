import mongoose from "mongoose";

const connectToDb = async () => {
    await mongoose.connect("mongodb://localhost:27017/sunwayl2")
    console.log("application is connected to database successfully")
};
export default connectToDb;


/*
postman backend mongoose mongodb

*/