import express from "express";
import cors from "cors";
import morgan from "morgan";
import taskRouter from "./routers/task.router";

const app = express();

app.set("PORT", process.env.PORT || 3000);
app.use(
  cors({
    origin:
      "https://todolist-frontend-3hsji3w94-elianandrel456s-projects.vercel.app",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/v1/tasks", taskRouter);

export default app;
