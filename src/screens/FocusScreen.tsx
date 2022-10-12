import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Spacer from "../components/Spacer";
import TextButton from "../components/TextButton";
import useTaskStore from "../hooks/use-task-store";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Task = styled.div`
  align-items: center;
  display: flex;
  font-size: 32px;
  flex: 1;
  justify-content: center;
  padding-bottom: 45px;
`;

type Props = {};

const FocusScreen: React.FC<Props> = () => {
  const { focusedTask: task, shuffleFocusedTask, updateTaskCompletion } = useTaskStore();
  const handleMarkCompleted = () => {
    if (task) {
      updateTaskCompletion(task.id, true);
    }
  };

  return task ? (
    <Container>
      <Task>{task.label}</Task>
      <Button onClick={handleMarkCompleted}>Mark Completed</Button>
      <Spacer height={45} />
      <TextButton onClick={shuffleFocusedTask}>Nope!</TextButton>
    </Container>
  ) : (
    <div>No incomplete Tasks</div>
  );
};

export default FocusScreen;
