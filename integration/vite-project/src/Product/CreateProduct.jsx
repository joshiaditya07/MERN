import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const CreateProduct = () => {
    let [name, setName] = useState("");
    let [price, setPrice] = useState("");
    let [quantity, setQuantity] = useState("");
    let [description, setDescription] = useState("");

    // send data to backend through api
    // url = localhost:8000/product
    // method = POST

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        let data = {
            name: name,
            price: price,
            quantity: quantity,
            description: description
        }
        
        try {
            let result = await axios({
            url : "http://localhost:8000/product",
            method: "post",
            data: data
        });

        setName("");
        setPrice("");
        setQuantity("");
        setDescription("");

        toast.success("Product created successfully");
       
        } catch (error) {
           
            toast.error("Something went wrong! Unable to create product.");
            toast.error(error.response.data.message);
        }
        
    };

    // send data to backend through api
    // url = localhost:8000/product
    // method = POST

    

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Product Name:</label>
            <input type="text" 
            onChange={(e) => setName(e.target.value)}
            value={name}  />
        </div>
        <div>
            <label>Price:</label>
            <input type="number" 
            onChange={(e) => setPrice(e.target.value)}
            value={price}  />
        </div>
        <div>
            <label>Quantity:</label>
            <input type="number" 
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}  />
        </div>
        <div>
            <label>Description:</label>
            <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}  />
        </div>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default CreateProduct
