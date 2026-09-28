import React, { useState } from 'react'

const LearnUseState2 = () => {
    let [t,setT] = useState("password")
  return (
    <div>
      <input type = {t}></input>
      <button onClick={() => {
        if (t === "password") {
            setT("text")
        }
        else{
            setT("password")
        }
      }}> EYE</button>
    </div>
  )
}

export default LearnUseState2
