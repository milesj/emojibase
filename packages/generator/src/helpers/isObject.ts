export function isObject<T = object>(value: unknown): value is T {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
}
