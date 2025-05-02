import { z } from "zod";
import { priorityE } from "../../models/task.model";

export const taskRequestSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  completed: z.boolean().optional(),
  userId: z.string({ message: "User ID is required" }),
  dueDate: z.string().nullable().optional(),
  priority: z.nativeEnum(priorityE).optional(),
  description: z.string().optional(),
  parentId: z.number().nullable().optional(),
});
