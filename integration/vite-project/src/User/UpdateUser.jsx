import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateUser = () => {
  const { id } = useParams();

  let [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
    address: "",
    phone: "",
  });

  const getData = async () => {
    try {
      const result = await axios({
        url: `http://localhost:8000/user/${id}`,
        method: "get",
      });

      setUser(result.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios({
        url: `http://localhost:8000/user/${id}`,
        method: "patch",
        data: user,
      });

      toast.success("User updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={user.name} onChange={handleChange} />
      <input name="age" value={user.age} onChange={handleChange} />
      <input name="email" value={user.email} onChange={handleChange} />
      <input name="address" value={user.address} onChange={handleChange} />
      <input name="phone" value={user.phone} onChange={handleChange} />

      <textarea
        name="description"
        value={user.description}
        onChange={handleChange}
      />

      <button type="submit">Update User</button>
    </form>
  );
};

export default UpdateUser;