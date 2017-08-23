import generateEmoticonPermutations from '../src/generateEmoticonPermutations';

describe('generateEmoticonPermutations()', () => {
  it('handles happy', () => {
    expect(generateEmoticonPermutations(':)'))
      .toEqual(['=-)', '=-}', ':-]', '=-]', ':-}', ':-)', '=}', '=]', '=)', ':}', ':]', ':)']);
  });

  it('handles sad', () => {
    expect(generateEmoticonPermutations(':('))
      .toEqual(['=-(', '=-{', ':-[', '=-[', ':-{', ':-(', '={', '=[', '=(', ':{', ':[', ':(']);
  });

  it('handles mouths using letters', () => {
    expect(generateEmoticonPermutations(':p'))
      .toEqual(['=-P', ':-P', '=-p', ':-p', ':p', ':P', '=P', '=p']);
  });

  it('handles 3 character emoticons', () => {
    expect(generateEmoticonPermutations('>:('))
      .toEqual(['>=-(', '>=-{', '>:-[', '>=-[', '>:-{', '>:-(', '>={', '>=[', '>=(', '>:{', '>:[', '>:(']);
  });

  it('doesnt include nose variations', () => {
    expect(generateEmoticonPermutations(':|', { withNose: false }))
      .toEqual([':|', '=|']);
  });

  it('doesnt assume a face', () => {
    expect(generateEmoticonPermutations('\\m/', { isFace: false }))
      .toEqual(['\\m/', '\\M/']);
  });
});
