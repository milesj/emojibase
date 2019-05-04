import { Property } from '../types';

export default function hasProperty(property: Set<Property>, search: Property[]): boolean {
  return Array.from(property).some(prop => search.includes(prop));
}
