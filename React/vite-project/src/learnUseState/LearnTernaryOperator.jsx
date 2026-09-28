import React from 'react'

const LearnTernaryOperator = () => {
    let age = 17; 
  
  return (
    <div>
        {
        age>18?"can vote" : "cannot vote"
    }
    </div>
  )
}

export default LearnTernaryOperator
