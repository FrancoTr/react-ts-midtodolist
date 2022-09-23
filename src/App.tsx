import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import FocusScreen from "./screens/FocusScreen";
import ListScreen from "./screens/ListScreen";
import { Task } from "./types";
import { shuffle } from "lodash";
import { nanoid } from "nanoid";
import useLocalStorage from "./hooks/use-local-storage";
import TaskContext from "./contexts/task-store";

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);

  const activeStyle = {
    fontWeight: "bold",
  };

  return (
    <BrowserRouter>
      <TaskContext.Provider value={[tasks, setTasks]}>
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
          <Route path='/focus' element={<FocusScreen />} />
        </Routes>
      </TaskContext.Provider>
    </BrowserRouter>
  );
}

export default App;
