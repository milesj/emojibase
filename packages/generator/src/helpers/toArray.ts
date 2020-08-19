export default function isArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}
