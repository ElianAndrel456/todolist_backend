import { NextFunction, Request, Response } from "express";
import { ZodError, AnyZodObject } from "zod";

export const validMiddleware =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = schema.safeParse(req.body);
      if (!result.success) throw new ZodError(result.error.issues);

      req.body = result.data;

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Validation error:", error.errors);
        res.status(400).json({
          error: error.message,
        });
      } else
        res.status(500).json({
          error: "Internal Server Error",
        });
    }
  };
