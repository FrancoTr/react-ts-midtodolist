import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import styled from "styled-components";
import useTaskStore from "../hooks/use-task-store";
import { Task } from "../types";
import TextButton from "../components/TextButton";
import Spacer from "../components/Spacer";
import DeleteIcon from "../icons/DeleteIcon";
import IconButton from "../components/IconButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
const List = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 45px 24px;
`;

const ListItem = styled.label`
  display: flex;
  margin-bottom: 8px;
`;

const Input = styled.input`
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 15px;
  color: #fff;
  padding: 20px 24px;
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
    <Container>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <input
              type='checkbox'
              checked={task.isComplete}
              onChange={handleTaskCompleteChange(task)}
            />
            {task.label}
            <Spacer flex={1} />
            <IconButton onClick={handleTaskDeleteClick(task)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Spacer height={30} />
      <Input
        value={newTaskLabel}
        onChange={handleNewTaskLabelChange}
        onKeyPress={handleNewTaskKeyPress}
      />
      <Spacer height={45} />
      <TextButton onClick={handleClearClick} style={{ alignSelf: "center" }}>
        Clear Completed
      </TextButton>
    </Container>
  );
};

export default ListScreen;
