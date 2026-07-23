type OrderDirection = "ASC" | "DESC";

export function order<T>(
  data: T[],
  key: keyof T,
  direction: OrderDirection = "DESC"
): T[] {
  return data.sort((a, b) => {
    const valueA = a[key];
    const valueB = b[key];

    if (valueA < valueB) return direction === "ASC" ? -1 : 1;
    if (valueA > valueB) return direction === "ASC" ? 1 : -1;

    return 0;
  });
}