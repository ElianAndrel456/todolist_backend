import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.DB_HOST) {
  throw new Error("DB_HOST is not defined in .env file");
}
if (!process.env.DB_PORT) {
  throw new Error("DB_PORT is not defined in .env file");
}
if (!process.env.DB_USER) {
  throw new Error("DB_USER is not defined in .env file");
}
if (!process.env.DB_PASSWORD) {
  throw new Error("DB_PASSWORD is not defined in .env file");
}
if (!process.env.DB_DATABASE) {
  throw new Error("DB_DATABASE is not defined in .env file");
}

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ["src/models/*.ts"],
  synchronize: true,
});
AppDataSource.initialize()
  .then(() => {
    console.log("Conexión exitosa a la base de datos!");
  })
  .catch((error) => console.error("Error de conexión:", error));
