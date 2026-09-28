import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReadAllProduct from './ReadAllProduct'


/*
route
    static
    dynamic
*/
const SunwayRoute = () => {
  return (
    <div>
      <Routes>
        <Route path = "/product/:id" element={<ReadAllProduct></ReadAllProduct>} />
        <Route path = "/job" element={<div>This is the job page</div>} />
        <Route path = "/user" element={<div>This is the user page</div>} />
      </Routes>
    </div>
  )
}

export default SunwayRoute


/*
localhost:5173/product => this is product page
localhost:5173/job => this is job page
localhost:5173/user => this is user page


*/