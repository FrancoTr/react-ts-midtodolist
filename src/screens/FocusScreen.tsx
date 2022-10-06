import React from "react";
import styled from "styled-components";
import TextButton from "../components/TextButton";
import useTaskStore from "../hooks/use-task-store";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <div>{task.label}</div>
      <button onClick={handleMarkCompleted}>Mark Completed</button>
      <TextButton onClick={shuffleFocusedTask}>Nope!</TextButton>
    </Container>
  ) : (
    <div>No incomplete Tasks</div>
  );
};

export default FocusScreen;
