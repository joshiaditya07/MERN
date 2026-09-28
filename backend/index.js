// make express application

// attach port to it

import express, { json } from "express"
import firstRoute from "./src/routes/firstRoute.js";
import productRoute from "./src/routes/productRoute.js";
import userRoute from "./src/routes/userRoute.js";
import reviewRoute from "./src/routes/reviewRoute.js";
import connectToDb from "./src/routes/connectToDb.js";
import JobRoute from "./src/routes/jobRoute.js";
import cors from "cors";
let app = express()

app.listen(8000, () => {
  console.log("application is listening at port 8000");
  connectToDb() //connect to database
});
app.use(cors())
app.use(json())  //make backend understand json data
app.use("/abc", firstRoute) 
app.use("/product", productRoute)
app.use("/user", userRoute)
app.use("/review", reviewRoute)
app.use("/job", JobRoute)

// enable corse


 /*
  database

  c => create => POST
  r => read => GET
  u => update => PUT / PATCH
  d => delete => DELETE


  making api means defining response for each request
 
  localhost:8000/product, post => i am create method
  localhost:8000/product, get => i am  update method
  localhost:8000/product, put => i am  method
  localhost:8000/product, delete => i am delete method
 */ 