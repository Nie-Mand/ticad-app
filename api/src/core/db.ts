import { DataSource } from "typeorm";
import { postgres } from "./env";
import path from "path";

console.log(path.join(__dirname, "../models/**/*.model.ts"));

export async function databaseConnect() {
  try {
    const source = new DataSource({
      type: "postgres",
      host: postgres.host,
      port: postgres.port,
      username: postgres.username,
      password: postgres.password,
      database: postgres.database,
      synchronize: true,
      entities: [path.join(__dirname, "../models/*.model.ts")],
      logging: true,
    });
    await source.initialize();
    console.log("PG is up 🐘 and walking");
  } catch (E) {
    console.log(E);
    return null;
  }
}
