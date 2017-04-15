import createKeywords from '../src/createKeywords';

describe('createKeywords()', () => {
  it('cleans and splits name into an array', () => {
    expect(createKeywords('BLACK RIGHT-POINTING DOUBLE TRIANGLE WITH VERTICAL BAR')).toEqual([
      'black',
      'right-pointing',
      'double',
      'triangle',
      'vertical',
      'bar',
    ]);
  });

  it('removes unwanted characters', () => {
    expect(createKeywords('WOMAN, MICROSCOPE; EMOJI MODIFIER FITZPATRICK TYPE-4')).toEqual([
      'woman',
      'microscope',
    ]);
  });

  it('removes conjunction words', () => {
    expect(createKeywords('MAN WITH GUA PI MAO')).toEqual(['man', 'gua', 'pi', 'mao']);
    expect(createKeywords('FACE WITH MEDICAL MASK')).toEqual(['face', 'medical', 'mask']);
  });

  it('doesnt break valid words', () => {
    expect(createKeywords('POLICE OFFICER')).toEqual(['police', 'officer']);
  });
});
