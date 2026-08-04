export const userKeys = {
  all: (page: number, limit: number) =>
    `users:page:${page}:limit:${limit}`,

  byId: (id: string) =>
    `users:${id}`,

  email: (email: string) =>
    `users:email:${email}`,
};