"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
const global_1 = require("../entities/global");
const global = {
    getAll: async () => {
        return await db_1.dataSource.getRepository(global_1.Global).find();
    },
    getByFilters: async (filters) => {
        const query = db_1.dataSource.getRepository(global_1.Global).createQueryBuilder('global');
        if (filters.sexe) {
            query.andWhere('global.sexe = :sexe', { sexe: filters.sexe });
        }
        if (filters.dispositif) {
            query.andWhere('global.dispositif = :dispositif', { dispositif: filters.dispositif });
        }
        if (filters.cheville_max) {
            query.andWhere('global.cheville_min <= :cheville AND global.cheville_max >= :cheville', { cheville: filters.cheville_max });
        }
        if (filters.cuisse_max) {
            query.andWhere('global.cuisse_min <= :cuisse AND global.cuisse_max >= :cuisse', { cuisse: filters.cuisse_max });
        }
        if (filters.hauteur_max) {
            query.andWhere('global.hauteur_min <= :hauteur AND global.hauteur_max >= :hauteur', { hauteur: filters.hauteur_max });
        }
        return await query.getMany();
    },
};
exports.default = global;
//# sourceMappingURL=globalService.js.map