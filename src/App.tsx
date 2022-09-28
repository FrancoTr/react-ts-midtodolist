import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import FocusScreen from "./screens/FocusScreen";
import ListScreen from "./screens/ListScreen";
import { Task } from "./types";
import useLocalStorage from "./hooks/use-local-storage";
import TaskContext from "./contexts/task-store";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
`;

const TabButton = styled(NavLink)`
  align-items: center;
  width: 120px;
  background: #000;
  color: #fff;
  display: flex;
  height: 62px;
  justify-content: center;
  text-decoration: none;
  width: 120px;

  &.active {
  }
`;

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);

  return (
    <BrowserRouter>
      <TaskContext.Provider value={[tasks, setTasks]}>
        <Nav>
          <TabButton to='/' className={({ isActive }) => (isActive ? "active" : "")}>
            List View
          </TabButton>
          <TabButton to='/focus' className={({ isActive }) => (isActive ? "active" : "")}>
            Focus View
          </TabButton>
        </Nav>
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
