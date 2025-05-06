import { z } from "zod";
import { priorityE } from "../../models/task.model";

export const taskRequestSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  completed: z.boolean().default(false),
  dueDate: z.coerce.date().optional().nullable(),
  priority: z.nativeEnum(priorityE).default(priorityE.LOW),
  description: z.string().optional(),
});

export type TaskCreate = z.infer<typeof taskRequestSchema>;
