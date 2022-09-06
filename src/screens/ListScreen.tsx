import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { nanoid } from "nanoid";

type Props = {};

type Task = {
  id: string;
  label: string;
  isComplete: boolean;
};

const ListScreen: React.FC<Props> = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskLabel, setNewTaskLabel] = useState("");

  const handleNewTaskLabelChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTaskLabel(e.target.value);

  const handleNewTaskKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newTaskLabel !== "") {
      setTasks((tasks) => [...tasks, { id: nanoid(), label: newTaskLabel, isComplete: false }]);
      setNewTaskLabel("");
    }
  };

  return (
    <div>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <input type='checkbox' checked={task.isComplete} />
            {task.label}
          </div>
        ))}
      </div>
      <input
        value={newTaskLabel}
        onChange={handleNewTaskLabelChange}
        onKeyPress={handleNewTaskKeyPress}
      />
    </div>
  );
};

export default ListScreen;
