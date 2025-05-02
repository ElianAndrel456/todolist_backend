import { Request, Response } from "express";
import { TaskService } from "../service/task.service";

export class TaskController {
  static async get(req: Request, res: Response) {
    try {
      const userId = req.query.userId as string;
      if (!userId) {
        res.status(400).json({ message: "User ID is required" });
        return;
      }

      const tasks = await TaskService.getAllTasks(userId);

      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: "Error fetching tasks" });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const task = await TaskService.getTaskById(Number(id));
      if (!task) return res.status(404).json({ message: "Task not found" });
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: "Error fetching task" });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const task = await TaskService.createTask(req.body);
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ message: "Error creating task" });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const task = await TaskService.updateTask(Number(id), req.body);
      if (!task) res.status(404).json({ message: "Task not found" });
      else res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: "Error updating task" });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const task = await TaskService.deleteTask(Number(id));
      if (!task) res.status(404).json({ message: "Task not found" });
      else res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: "Error deleting task" });
    }
  }
}
