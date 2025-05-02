import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

console.log("Conectando a la base de datos...");
console.log("DB_HOST:", process.env.DB_HOST);

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "tasklistdb",
  entities: ["src/models/*.ts"],
  ssl: true,
  synchronize: true,
});
AppDataSource.initialize()
  .then(() => {
    console.log("Conexión exitosa a la base de datos!");
  })
  .catch((error) => console.error("Error de conexión:", error));
