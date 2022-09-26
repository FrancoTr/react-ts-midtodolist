import { useContext } from "react";
import { shuffle } from "lodash";
import { nanoid } from "nanoid";
import { useState } from "react";
import TaskContext from "../contexts/task-store";
import { Task } from "../types";

const useTaskStore = () => {
  const [tasks, setTasks] = useContext(TaskContext);
  const getIncompleteTask = () => tasks.filter((task) => !task.isComplete)[0]?.id;
  const [focusedTaskId, setFocusedTaskId] = useState<string | undefined>(getIncompleteTask());

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

  const api = {
    addTask,
    focusedTask,
    tasks,
    setTasks,
    shuffleFocusedTask,
    updateTaskCompletion,
  };

  return api;
};

export default useTaskStore;
