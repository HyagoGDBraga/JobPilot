export const pagination = (page: number, limit: number) => {
  const currentPage = Math.max(page, 1);
  const perPage = Math.min(Math.max(limit, 1), 100);

  return {
    skip: (currentPage - 1) * perPage,
    take: perPage,
    page: currentPage,
  };
};
