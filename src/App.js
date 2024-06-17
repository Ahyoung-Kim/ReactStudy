import { Routes, Route, Link } from "react-router-dom";
import ReactQueryPage from "./components/pages/ReactQueryPage";
import ReactHookFormPage from "./components/pages/ReactHookFormPage";

function App() {
  return (
    <div>
      <Link to="react-query">리액트 쿼리</Link>
      <Link to="react-hook-form">리액트 훅 폼</Link>

      <Routes>
        <Route path="react-query" element={<ReactQueryPage />} />
        <Route path="react-hook-form" element={<ReactHookFormPage />} />
      </Routes>
    </div>
  );
}

export default App;
