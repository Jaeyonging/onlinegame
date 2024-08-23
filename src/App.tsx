import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import './App.css';

function App() {
  return (
    <Suspense fallback={<div>로딩중</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/games/01"
          element={
            <iframe
              src="/games/01/index.html"
              title="Game 01"
              style={{ width: '100%', height: '100vh', border: 'none' }}
            />
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
