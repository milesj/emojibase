import createShortnames from '../src/createShortnames';

describe('createShortnames()', () => {
  it('returns an array with the name', () => {
    expect(createShortnames('GOLFER, FEMALE SIGN; EMOJI MODIFIER FITZPATRICK TYPE-6')).toEqual([
      ':golfer_female_sign:',
    ]);
  });

  it('lowercases and replaces spaces with underscores', () => {
    expect(createShortnames('INFORMATION DESK PERSON, FEMALE SIGN; EMOJI MODIFIER FITZPATRICK TYPE-1-2')).toEqual([
      ':information_desk_person_female_sign:',
    ]);
  });
});
