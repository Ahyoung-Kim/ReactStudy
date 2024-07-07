import React, { useEffect } from "react";

import styled from "styled-components";

import axios from "axios";
import { useInfiniteQuery } from "react-query";

const fetchPosts = async ({ pageParam = 1 }) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`
  );
  return res.data;
};

const InfiniteScrollPage = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("posts", fetchPosts, {
    // fetchPosts 의 파라미터({ pageParam })를 반환하는 함수
    // lastPage: 이전 페이지의 마지막 데이터
    // allPages: 모든 데이터
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 10) {
        return allPages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤의 끝에 도달하고, 다음 페이지가 존재하고, 페칭상태가 아니라면
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "error") return <div>Error: {error.message}</div>;

  return (
    <Container>
      {data.pages.map((page, index) => (
        <Pages key={index}>
          {page.map((post) => (
            <Page key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </Page>
          ))}
        </Pages>
      ))}
      {isFetchingNextPage && <p>Loading more...</p>}
    </Container>
  );
};

export default InfiniteScrollPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`;

const Pages = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Page = styled.div`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
`;
