import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>List view</div>} />
        <Route path='/focus' element={<div>Focus view</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
