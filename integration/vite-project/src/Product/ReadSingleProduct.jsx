import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ReadSingleProduct = () => {
  let { id } = useParams();
  let [product, setProduct] = useState({});

  const getData = async () => {
    try {
      const result = await axios({
        url: `http://localhost:8000/product/${id}`,
        method: "get",
      });

      setProduct(result.data.result);
    } catch (error) {
      toast.error("Something went wrong! Unable to read product.");
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div>
      <h1>{product.name}</h1>
      <h1>{product.price}</h1>
      <h1>{product.description}</h1>
    </div>
  );
};

export default ReadSingleProduct;