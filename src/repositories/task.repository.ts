import { AppDataSource } from "../connection/database";
import { Task } from "../models/task.model";

export const taskRepository = AppDataSource.getRepository(Task);
