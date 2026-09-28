import React from 'react'

const Job = ({title, location, salary}) => {
  return (
    <div>
      <p> job title is {title} </p>
      <p> location is {location} </p>
      <p> salary is {salary} </p>

    </div>
  )
}

export default Job
