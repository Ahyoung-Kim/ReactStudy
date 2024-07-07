import { Routes, Route, Link } from "react-router-dom";

import styled from "styled-components";

import ReactQueryPage from "./components/pages/ReactQueryPage";
import ReactHookFormPage from "./components/pages/ReactHookFormPage";
import InfiniteScrollPage from "./components/pages/InfiniteScrollPage";

function App() {
  return (
    <div>
      <MenuDiv>
        <Menu to="react-query">리액트 쿼리</Menu>
        <Menu to="react-hook-form">리액트 훅 폼</Menu>
        <Menu to="infinite-scroll">인피니트 스크롤</Menu>
      </MenuDiv>

      <Routes>
        <Route path="react-query" element={<ReactQueryPage />} />
        <Route path="react-hook-form" element={<ReactHookFormPage />} />
        <Route path="infinite-scroll" element={<InfiniteScrollPage />} />
      </Routes>
    </div>
  );
}

export default App;

const MenuDiv = styled.div`
  background-color: white;
  margin: 10px;
  padding: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const Menu = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  padding: inherit;
  border-radius: inherit;
  cursor: pointer;

  &:hover {
    background-color: #dcdcdc;
  }
`;
