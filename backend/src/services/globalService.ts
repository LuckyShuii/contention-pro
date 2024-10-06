import { Global } from "../entities/global";

const global = {
    getAll: async () => {
        return await Global.find();
    },
    getByFilters: async (filters: any) => {
        return await Global.find({ where: filters });
    },
}

export default global;