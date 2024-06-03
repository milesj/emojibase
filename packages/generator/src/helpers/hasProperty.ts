import type { Property } from '../types';

export function hasProperty(property: Property[], search: Property[]): boolean {
	return property.some((prop) => search.includes(prop));
}
