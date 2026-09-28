import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const { id } = useParams();

  let [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    description: "",
  });

  const getData = async () => {
    try {
      const result = await axios({
        url: `http://localhost:8000/product/${id}`,
        method: "get",
      });

      setProduct(result.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios({
        url: `http://localhost:8000/product/${id}`,
        method: "patch",
        data: product,
      });

      toast.success("Product updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={product.name} onChange={handleChange} />
      <input name="price" value={product.price} onChange={handleChange} />
      <input name="quantity" value={product.quantity} onChange={handleChange} />

      <textarea
        name="description"
        value={product.description}
        onChange={handleChange}
      />

      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProduct;