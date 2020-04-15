import { Property } from '../types';

export default function hasProperty(property: Property[], search: Property[]): boolean {
  return property.some((prop) => search.includes(prop));
}
