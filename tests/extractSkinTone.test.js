import extractSkinTone from '../src/extractSkinTone';

describe('extractSkinTone()', () => {
  it('returns null if no skin tone was found', () => {
    expect(extractSkinTone('HAPPY PERSON RAISING ONE HAND')).toBeNull();
  });

  it('returns the correct tone number', () => {
    expect(extractSkinTone('HAPPY PERSON RAISING ONE HAND, FEMALE SIGN; EMOJI MODIFIER FITZPATRICK TYPE-1-2')).toBe(1);

    expect(extractSkinTone('HAPPY PERSON RAISING ONE HAND, FEMALE SIGN; EMOJI MODIFIER FITZPATRICK TYPE-3')).toBe(2);

    expect(extractSkinTone('HAPPY PERSON RAISING ONE HAND, FEMALE SIGN; EMOJI MODIFIER FITZPATRICK TYPE-4')).toBe(3);

    expect(extractSkinTone('HAPPY PERSON RAISING ONE HAND, FEMALE SIGN; EMOJI MODIFIER FITZPATRICK TYPE-5')).toBe(4);

    expect(extractSkinTone('HAPPY PERSON RAISING ONE HAND, FEMALE SIGN; EMOJI MODIFIER FITZPATRICK TYPE-6')).toBe(5);
  });
});
