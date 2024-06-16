import axios from "axios";

export const getAllPosts = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getPost = async (id) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const createPost = async ({ title, body, userId }) => {
  try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body,
      userId,
    });

    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};
