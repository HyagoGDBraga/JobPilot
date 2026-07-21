export function missingFields(
  requiredFields: string[],
  receivedFields: object,
): string[] {
  let missingFields: string[] = [];

  for (const field of requiredFields) {
    if (!(field in receivedFields)) {
      missingFields.push(field);
    }
  }
  return missingFields;
}
