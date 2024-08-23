import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import './App.css';

const PlayGame = lazy(() => import('./components/PlayGame'));

function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/:name" element={<PlayGame />} />
      </Routes>
    </Suspense>
  );
}

export default App;
