import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="p-10 text-center">MindSynk — coming up next</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
