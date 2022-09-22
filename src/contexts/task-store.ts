import { createContext } from "react";
import { Task } from "../types";

const TaskContext = createContext<Task[]>([]);

export default TaskContext;
