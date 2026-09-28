import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const ReadAllProduct = () => {

  let [products, setProducts] = useState([]);




  // hit api on page refresh

  const getData = async () => {
    try {
      let result = await axios({
        url : "http://localhost:8000/product",
        method: "get"
      });
      setProducts(result.data.result);
      console.log(result)
    } catch (error) {
      toast.error("Something went wrong! Unable to read products.");
      toast.error(error.response.data.message);
    }
  }

  useEffect(() =>{
    getData();
  }, [])

    
  
  
  return (
    <div>
      {products.map((value,i) => {
        return <div key={i}>
          <h1>{value.name}</h1>
          <h1>{value.price}</h1>
        </div>
      })}
    </div>
  )
  
}

export default ReadAllProduct
