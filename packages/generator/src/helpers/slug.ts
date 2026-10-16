export function slug(value: string): string {
	return value.toLowerCase().replace('&', '').replaceAll(/\s+/g, '-');
}
