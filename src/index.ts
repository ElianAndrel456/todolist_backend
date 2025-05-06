import "reflect-metadata";
import "./connection/database";
import { app, server } from "./app";

function main() {
  server.listen(app.get("PORT"), () => {
    console.log(`Server is running on port ${app.get("PORT")}`);
  });
}

main();
