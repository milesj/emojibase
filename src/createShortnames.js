import cleanName from './cleanName';

export default function createShortnames(name) {
  return [`:${cleanName(name).replace(/ /g, '_')}:`];
}
