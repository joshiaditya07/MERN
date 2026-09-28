import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ReadSingleUser = () => {
  let { id } = useParams();
  let [user, setUser] = useState({});

  const getData = async () => {
    try {
      const result = await axios({
        url: `http://localhost:8000/user/${id}`,
        method: "get",
      });

      setUser(result.data.result);
    } catch (error) {
      toast.error("Something went wrong! Unable to read user.");
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <h1>{user.email}</h1>
      <h1>{user.address}</h1>
      <h1>{user.phone}</h1>
    </div>
  );
};

export default ReadSingleUser;