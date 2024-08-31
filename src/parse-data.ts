/**
 * Returns parsed data of Result type
 * or null if data string is empty is cannot be parsed
 */
export function parseData<Result = any>(data?: string | null): Result | null {
  if (data == null || data === '') {
    return null;
  }

  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
}
