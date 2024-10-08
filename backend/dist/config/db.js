"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const global_1 = require("../entities/global");
exports.dataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "contention_pro.sqlite",
    entities: [global_1.Global],
    synchronize: true,
    logging: ["error", "query"]
});
//# sourceMappingURL=db.js.map