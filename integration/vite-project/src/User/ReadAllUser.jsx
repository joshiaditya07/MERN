import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ReadAllUser = () => {
  let [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      let result = await axios({
        url : "http://localhost:8000/user",
        method: "get"
      });
      setUsers(result.data.result);
      console.log(result)
    } catch (error) {
      toast.error("Something went wrong! Unable to read users.");
      toast.error(error.response.data.message);
    }

  };
  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      {users.map((value,i) =>{
        return <div key={i}>
          <h1>{value.name}</h1>
          <h1>{value.age}</h1>
          <h1>{value.email}</h1>
          <h1>{value.address}</h1>
          <h1>{value.phone}</h1>
        </div>
      })}
    </div>
  )
}

export default ReadAllUser
