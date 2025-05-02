import { Router } from "express";
import { TaskController } from "../controllers/task.controller";
import { validMiddleware } from "../middleware/valid.middleware";
import { taskRequestSchema } from "../schema/request/task.create.schema";

const router = Router();
router.get("/", TaskController.get);
router.post("/", validMiddleware(taskRequestSchema), TaskController.create);
router.put("/:id", TaskController.update);
router.delete("/:id", TaskController.delete);

export default router;
