import createShortnames from '../src/createShortnames';

describe('createShortnames()', () => {
  it('returns an array with the name', () => {
    expect(createShortnames('GOLFER, FEMALE SIGN')).toEqual([
      'golfer_female',
    ]);
  });

  it('lowercases and replaces spaces with underscores', () => {
    expect(createShortnames('INFORMATION DESK PERSON, FEMALE SIGN; EMOJI MODIFIER FITZPATRICK TYPE-1-2')).toEqual([
      'information_desk_person_female_tone1',
    ]);
  });

  it('includes tone number and decrements higher numbers', () => {
    expect(createShortnames('HAPPY PERSON RAISING ONE HAND, FEMALE SIGN; EMOJI MODIFIER FITZPATRICK TYPE-1-2')).toEqual([
      'happy_person_raising_one_hand_female_tone1',
    ]);

    expect(createShortnames('HAPPY PERSON RAISING ONE HAND, FEMALE SIGN; EMOJI MODIFIER FITZPATRICK TYPE-3')).toEqual([
      'happy_person_raising_one_hand_female_tone2',
    ]);

    expect(createShortnames('HAPPY PERSON RAISING ONE HAND, FEMALE SIGN; EMOJI MODIFIER FITZPATRICK TYPE-4')).toEqual([
      'happy_person_raising_one_hand_female_tone3',
    ]);

    expect(createShortnames('HAPPY PERSON RAISING ONE HAND, FEMALE SIGN; EMOJI MODIFIER FITZPATRICK TYPE-5')).toEqual([
      'happy_person_raising_one_hand_female_tone4',
    ]);

    expect(createShortnames('HAPPY PERSON RAISING ONE HAND, FEMALE SIGN; EMOJI MODIFIER FITZPATRICK TYPE-6')).toEqual([
      'happy_person_raising_one_hand_female_tone5',
    ]);
  });

  it('increments if its been used before', () => {
    expect(createShortnames('FOO')).toEqual(['foo']);
    expect(createShortnames('FOO')).toEqual(['foo2']);
    expect(createShortnames('FOO')).toEqual(['foo3']);
  });
});
