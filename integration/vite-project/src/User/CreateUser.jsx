import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const CreateUser = () => {

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [address, setAddress] = useState("");
    let [phone, setPhone] = useState("");
    let [age, setAge] = useState("");
      
          
    const handleSubmit = async (e) => {
       e.preventDefault();
      
    let data = {
        name: name,
        age: age,
        email: email,
        password: password,
        address: address,
        phone: phone
        }

       try {
            let result = await axios({
            url : "http://localhost:8000/user",
            method: "post",
            data: data
        });

        setName("");
        setAge("");
        setEmail("");
        setPassword("");
        setAddress("");
        setPhone("");

        toast.success("User created successfully");
       
        } catch (error) {
           
            toast.error("Something went wrong! Unable to create user.");
            toast.error(error.response.data.message);
        }
        
    };
      
        return (
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                  <label>Name:</label>
                  <input type="text" 
                  onChange={(e) => setName(e.target.value)}
                  value={name}  />
              </div>
              <div>
                  <label>Age:</label>
                  <input type="number" 
                  onChange={(e) => setAge(e.target.value)}
                  value={age}  />
              </div>
        
              <div>
                  <label>Email:</label>
                  <input type="email" 
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}  />
              </div>
              <div>
                  <label>Password:</label>
                  <input type="password" 
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}  />
              </div>
              <div>
                  <label>Address:</label>
                  <input type="text" 
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}  />
              </div>
              <div>
                  <label>Phone:</label>
                  <input type="number" 
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}  />
              </div>
      
              <button>Submit</button>
            </form>
          </div>
        )
      }
      

export default CreateUser
