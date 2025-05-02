import app from "./app";
import "reflect-metadata";
import "./connection/database";

function main() {
  app.listen(app.get("PORT"), () => {
    console.log(`Server is running on port ${app.get("PORT")}`);
  });
}

main();
