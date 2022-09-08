import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import FocusScreen from "./screens/FocusScreen";
import ListScreen from "./screens/ListScreen";
import { Task } from "./types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const tasksProps = { tasks, setTasks };
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
        <Route path='/' element={<ListScreen {...tasksProps} />} />
        <Route path='/focus' element={<FocusScreen {...tasksProps} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
