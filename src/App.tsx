import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import FocusScreen from "./screens/FocusScreen";
import ListScreen from "./screens/ListScreen";
import { Task } from "./types";
import { shuffle } from "lodash";
import { nanoid } from "nanoid";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [focusedTaskId, setFocusedTaskId] = useState<string | undefined>(undefined);

  const addTask = (task: Pick<Task, "label">) => {
    const id = nanoid();
    setTasks((tasks) => [...tasks, { id: nanoid(), label: task.label, isComplete: false }]);
    if (!focusedTaskId) {
      setFocusedTaskId(id);
    }
  };

  const updateTaskCompletion = (taskId: string, isComplete: boolean) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === taskId) return { ...task, isComplete };
        return task;
      })
    );
  };

  const focusedTask = tasks.find((task) => task.id === focusedTaskId);

  const shuffleFocusedTask = () => {
    setFocusedTaskId(shuffle(tasks.filter((task) => !task.isComplete))[0]?.id);
  };

  const tasksApi = {
    addTask,
    focusedTask,
    tasks,
    setTasks,
    shuffleFocusedTask,
    updateTaskCompletion,
  };
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
        <Route path='/' element={<ListScreen {...tasksApi} />} />
        <Route path='/focus' element={<FocusScreen {...tasksApi} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
