// src/services/global.ts
import { dataSource } from '../config/db';
import { Global } from '../entities/global';

const global = {
    getAll: async () => {
        return await dataSource.getRepository(Global).find();
    },
    getByFilters: async (filters: any) => {
        const query = dataSource.getRepository(Global).createQueryBuilder('global');

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

export default global;
