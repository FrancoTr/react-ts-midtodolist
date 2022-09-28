import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import FocusScreen from "./screens/FocusScreen";
import ListScreen from "./screens/ListScreen";
import { Task } from "./types";
import useLocalStorage from "./hooks/use-local-storage";
import TaskContext from "./contexts/task-store";
import styled from "styled-components";

const TabButton = styled(NavLink)`
  width: 120px;
  color: #fff;
  height: 62px;
  width: 120px;
`;

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);

  return (
    <BrowserRouter>
      <TaskContext.Provider value={[tasks, setTasks]}>
        <nav>
          <TabButton to='/'>List View</TabButton>
          <TabButton to='/focus'>Focus View</TabButton>
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
