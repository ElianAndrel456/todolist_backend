import express from "express";
import cors from "cors";
import morgan from "morgan";
import http from "http";
import taskRouter from "./routers/task.router";

export const app = express();
export const server = http.createServer(app);

app.set("PORT", process.env.PORT || 3000);
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/v1/tasks", taskRouter);
