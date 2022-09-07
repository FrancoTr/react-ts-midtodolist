import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ListScreen from "./screens/ListScreen";

function App() {
  const activeStyle = {
    fontWeight: "bold",
  };

  return (
    <BrowserRouter>
      <nav>
        <NavLink to='/' style={({ isActive }) => (isActive ? activeStyle : {})}>
          List View
        </NavLink>{" "}
        -{" "}
        <NavLink to='/focus' style={({ isActive }) => (isActive ? activeStyle : {})}>
          Focus View
        </NavLink>
      </nav>
      <br />
      <Routes>
        <Route path='/' element={<ListScreen />} />
        <Route path='/focus' element={<div>Focus view</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
