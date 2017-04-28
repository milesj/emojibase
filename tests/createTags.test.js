import createTags from '../src/createTags';

describe('createTags()', () => {
  it('cleans and splits name into an array', () => {
    expect(createTags('BLACK RIGHT-POINTING DOUBLE TRIANGLE WITH VERTICAL BAR')).toEqual([
      'black',
      'right-pointing',
      'double',
      'triangle',
      'vertical',
      'bar',
    ]);
  });

  it('removes unwanted characters', () => {
    expect(createTags('WOMAN, MICROSCOPE; EMOJI MODIFIER FITZPATRICK TYPE-4')).toEqual([
      'woman',
      'microscope',
    ]);
  });

  it('removes conjunction words', () => {
    expect(createTags('MAN WITH GUA PI MAO')).toEqual(['man', 'gua', 'pi', 'mao']);
    expect(createTags('FACE WITH MEDICAL MASK')).toEqual(['face', 'medical', 'mask']);
  });

  it('doesnt break valid words', () => {
    expect(createTags('POLICE OFFICER')).toEqual(['police', 'officer']);
  });
});
