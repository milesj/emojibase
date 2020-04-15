export default function slug(value: string): string {
  return value.toLowerCase().replace('&', '').replace(/\s+/g, '-');
}
