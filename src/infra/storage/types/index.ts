export const contentType = {
  JPEG: "image/jpeg",
  PNG: "image/png",
  PDF: "application/pdf",
  CSV: "application/csv",
} as const;

export type ContentType = typeof contentType[keyof typeof contentType];