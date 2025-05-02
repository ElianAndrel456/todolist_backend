import { ITaskCreate } from "../models/task.model";
import { taskRepository } from "../repositories/task.repository";

export class TaskService {
  static async getAllTasks(userId: string) {
    const tasks = await taskRepository.find({
      where: {
        userId,
      },
    });
    return tasks;
  }

  static async getTaskById(id: number) {
    const task = await taskRepository.findOneBy({ id });
    return task;
  }

  static async createTask(task: ITaskCreate) {
    try {
      const newTask = taskRepository.create(task);
      await taskRepository.save(newTask);
      return newTask;
    } catch (error) {
      throw new Error("Error creating task");
    }
  }
  static async updateTask(id: number, task: ITaskCreate) {
    await taskRepository.update(id, task);
    const updatedTask = await taskRepository.findOneBy({ id });
    return updatedTask;
  }
  static async deleteTask(id: number) {
    const task = await taskRepository.findOneBy({ id });
    if (!Boolean(task)) throw new Error("Task not found");
    await taskRepository.delete(id);
    return task;
  }
}
