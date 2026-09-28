import React, { useState } from 'react'
// useState  hook is used to manage the state of a component in react. it allows us to add state to functional components and re-render the component when the state changes.
const LearnUseState1 = () => {
    // let count = 0
    let [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={()=>{
        console.log("button is clicked")
      }}> Click</button>

      <button onClick={()=>{
        setCount(count + 1)
        console.log("increment button is clicked")
      }}> Increment</button>
      <button onClick={()=>{
        setCount(count - 1)
        console.log("decrement button is clicked")
      }}> Decrement</button>

      <p>Count: {count}</p>
      
    </div>
  )
}

export default LearnUseState1

