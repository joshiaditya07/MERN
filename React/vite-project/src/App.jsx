// import Product from "./Product"
// import Review from "./Review"
// import User from "./User"

// const App = () =>{
//   let name = "Aditya"
//   let surname = "Joshi"

//   return <div>
//     <p> name is {name} and surname is {surname}</p>
//     <p> the sum of 5 and 10 is {5 + 10}</p>

//     <img src = "./images.jpg" alt="Profile Picture" />

//     <p style={{ backgroundColor: "green" , color: "white" }}> This is success message</p>

//     <p className="success"> Product created successfully</p>
//     <p className="error"> Unable to create Product</p>

//     <User />
//     <Product />
//     <Review />
//   </div>
// }

// export default App

// /*
// React consider tag as data
//  */


import React from 'react'
import SunwayNavLink from './SunwayNavLink'
import SunwayRoute from './SunwayRoute'
import Form1 from './Form1'
import Form2 from './Form2'

const App = () => {
  return (
    <div>
      {/* <SunwayNavLink></SunwayNavLink>
      <SunwayRoute></SunwayRoute> */}
      {/* <Form1 /> */}
      <Form2 />
    </div>
  )
}

export default App
