import React, { useEffect, useState } from "react";

import axios from "axios";
import { useQuery } from "react-query";

const ReactQueryPage = () => {
  const [count, setCount] = useState(0);
  const getAllPosts = async (type) => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

      if (res.status === 200) {
        console.log(`${type}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const {} = useQuery("posts", () => getAllPosts("react-query"));

  useEffect(() => {
    getAllPosts("useEffect");
  });

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
};

export default ReactQueryPage;
