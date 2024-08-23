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
          path="/games/cooking"
          element={
            <iframe
              src="/games/cooking/index.html"
              title="cooking"
              style={{ width: '100%', height: '100vh', border: 'none' }}
            />
          }
        />
        <Route
          path="/games/racing"
          element={
            <iframe
              src="/games/racing/index.html"
              title="racing"
              style={{ width: '100%', height: '100vh', border: 'none' }}
            />
          }
        />
      </Routes>

    </Suspense>
  );
}

export default App;
