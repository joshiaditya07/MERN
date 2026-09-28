import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./global.css"
import User from './User.jsx'
import Product from './Product.jsx'
import Job from './Job.jsx'
import LearnUseState1 from './learnUseState/LearnUseState1.jsx'
import LearnTernaryOperator from './learnUseState/LearnTernaryOperator.jsx'
import LearnUseState2 from './learnUseState/LearnUseState2.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      {/* {<User />} */}
      {/* {<Product />  } */}
      {/* {<Job title = "developer" location = "kathmandau" salary = {100000} />} */}
      {/* <LearnUseState1 /> */}
      {/* <LearnTernaryOperator /> */}
      {/* <LearnUseState2 /> */}
    </BrowserRouter>
  </StrictMode>,
)
