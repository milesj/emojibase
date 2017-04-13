export default function cleanName(name) {
  return name.toLowerCase().split(';')[0].replace(/[^a-z0-9 ]+/g, '');
}
