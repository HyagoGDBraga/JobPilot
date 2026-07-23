export const userKeys = {

    getAll: (page: number, limit: number) => {
        `getAll:user`;
    },

    getById: (id: string) => {
        `getById:user`;
    },

    create: (data: any) => {
        `create:user`
    },
    
    update: (id: string, data: any) => {
        `update:user`
    }
};
