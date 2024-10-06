import { DataSource } from "typeorm";
import { Global } from "../entities/global";

export const dataSource = new DataSource({
    type: "sqlite",
    database: "contention_pro.sqlite",
    entities: [Global],
    synchronize: true,
    logging: ["error", "query"]
});