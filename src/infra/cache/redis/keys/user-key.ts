export const userKeys = {

create: (data: any): string => 
  `users:created: ${data}`,

  all: (page: number, limit: number) =>
    `users:page:${page}:limit:${limit}`,

  byId: (id: string) =>
    `users:${id}`,

  email: (email: string) =>
    `users:email:${email}`,

  update: (id: string, data: any) =>
    `users:update ${id}`,

  remove: (id: string) =>
    `users:remove ${id}`,
};