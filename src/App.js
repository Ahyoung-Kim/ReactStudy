import { Routes, Route, Link } from "react-router-dom";
import ReactQueryPage from "./components/pages/ReactQueryPage";

function App() {
  return (
    <div>
      <Link to="react-query">리액트 쿼리</Link>

      <Routes>
        <Route path="react-query" element={<ReactQueryPage />} />
      </Routes>
    </div>
  );
}

export default App;
