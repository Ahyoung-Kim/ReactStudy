import { useMutation, useQueries, useQuery } from "react-query";

import { getAllPosts, getPost, createPost } from "../../api/post";

export const useAllPosts = () => {
  return useQuery("posts", getAllPosts);
};

export const usePost = (id) => {
  return useQuery(["post", id], () => getPost(id));
};

export const useCreatePost = ({ title, body, userId }) => {
  return useMutation(() => createPost({ title, body, userId }));
};

export const usePosts = (postIds = []) => {
  return useQueries(
    postIds.map((id) => ({
      queryKey: ["post", id],
      queryFn: () => getPost(id),
    }))
  );
};
