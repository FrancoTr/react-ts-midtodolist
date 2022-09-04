import React, { ChangeEvent, useState } from "react";

type Props = {};

type Task = {
  label: string;
};

const ListScreen: React.FC<Props> = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskLabel, setNewTaskLabel] = useState("");

  const handleNewTaskLabelChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTaskLabel(e.target.value);

  return (
    <div>
      <input value={newTaskLabel} onChange={handleNewTaskLabelChange} />
    </div>
  );
};

export default ListScreen;
