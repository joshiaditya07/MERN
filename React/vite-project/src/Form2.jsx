import React, { useState } from 'react'

/*
Job
title
location
salary 
experience



*/
const Form2 = () => {
    let [job, setJob] = useState("");
    let [title, setTitle] = useState("");
    let [location, setLocation] = useState("");
    let [salary, setSalary] = useState("");
    let [experience, setExperience] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(job, title, location, salary, experience);
    }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Job</label>
        <input type="text"  onChange={(e) => setJob(e.target.value)} />
      </div>
      <div><label>Title</label>
        <input type="text"  onChange={(e) => setTitle(e.target.value)}  />
      </div>
      <div><label>Location</label>
        <input type="text"  onChange={(e) => setLocation(e.target.value)} />
      </div>
      <div><label>Salary</label>
        <input type="number"  onChange={(e) => setSalary(e.target.value)} />
      </div>
      <div><label>Experience</label>
        <input type="number"  onChange={(e) => setExperience(e.target.value)} />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default Form2
