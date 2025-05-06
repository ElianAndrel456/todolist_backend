import { taskRepository } from "../repositories/task.repository";
import { TaskCreate } from "../schema/request/task.create.schema";

export class TaskService {
  static async getAllTasks() {
    const tasks = await taskRepository.find({
      order: {
        created_a: "DESC",
      },
    });
    return tasks;
  }

  static async getTaskById(id: number) {
    const task = await taskRepository.findOneBy({ id });
    return task;
  }

  static async createTask(task: TaskCreate) {
    try {
      const newTask = taskRepository.create(task);
      await taskRepository.save(newTask);
      return newTask;
    } catch (error) {
      console.error("Error creating task:", error);
      throw new Error("Error creating task");
    }
  }
  static async updateTask(id: number, task: TaskCreate) {
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
