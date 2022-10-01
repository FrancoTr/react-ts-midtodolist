import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import styled from "styled-components";
import useTaskStore from "../hooks/use-task-store";
import { Task } from "../types";

const Container = styled.div`
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
`;

type Props = {};

const ListScreen: React.FC<Props> = () => {
  const { addTask, tasks, setTasks, updateTaskCompletion } = useTaskStore();
  const [newTaskLabel, setNewTaskLabel] = useState("");

  const handleNewTaskLabelChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTaskLabel(e.target.value);

  const handleNewTaskKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newTaskLabel !== "") {
      addTask({ label: newTaskLabel });
      setNewTaskLabel("");
    }
  };

  const handleTaskCompleteChange = (task: Task) => (e: ChangeEvent<HTMLInputElement>) => {
    updateTaskCompletion(task.id, e.target.checked);
  };

  const handleTaskDeleteClick = (handleTask: Task) => () => {
    setTasks((tasks) => tasks.filter((task) => task.id !== handleTask.id));
  };

  const handleClearClick = () => {
    setTasks((tasks) => tasks.filter((task) => !task.isComplete));
  };

  return (
    <div>
      <Container>
        {tasks.map((task) => (
          <div key={task.id}>
            <input
              type='checkbox'
              checked={task.isComplete}
              onChange={handleTaskCompleteChange(task)}
            />
            {task.label}
            <button onClick={handleTaskDeleteClick(task)}>Delete</button>
          </div>
        ))}
      </Container>
      <input
        value={newTaskLabel}
        onChange={handleNewTaskLabelChange}
        onKeyPress={handleNewTaskKeyPress}
      />
      <div>
        <button onClick={handleClearClick}>Clear Completed</button>
      </div>
    </div>
  );
};

export default ListScreen;
