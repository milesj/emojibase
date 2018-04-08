import flattenEmojiData from '../src/flattenEmojiData';

describe('flattenEmojiData()', () => {
  const data = [
    {
      name: 'BABY',
      hexcode: '1F476',
      shortcodes: ['baby'],
      emoji: '👶',
      type: 1,
      order: 111,
      group: 0,
      subgroup: 0,
      annotation: 'baby',
      tags: ['baby', 'young'],
      skins: [
        {
          name: 'BABY, EMOJI MODIFIER FITZPATRICK TYPE-1-2',
          hexcode: '1F476-1F3FB',
          shortcodes: ['baby_tone1'],
          emoji: '👶🏻',
          type: 1,
          order: 112,
          group: 0,
          subgroup: 0,
          skin: 1,
          annotation: 'baby, light skin tone',
        },
        {
          name: 'BABY, EMOJI MODIFIER FITZPATRICK TYPE-3',
          hexcode: '1F476-1F3FC',
          shortcodes: ['baby_tone2'],
          emoji: '👶🏼',
          type: 1,
          order: 113,
          group: 0,
          subgroup: 0,
          skin: 2,
          annotation: 'baby, medium-light skin tone',
        },
        {
          name: 'BABY, EMOJI MODIFIER FITZPATRICK TYPE-4',
          hexcode: '1F476-1F3FD',
          shortcodes: ['baby_tone3'],
          emoji: '👶🏽',
          type: 1,
          order: 114,
          group: 0,
          subgroup: 0,
          skin: 3,
          annotation: 'baby, medium skin tone',
        },
        {
          name: 'BABY, EMOJI MODIFIER FITZPATRICK TYPE-5',
          hexcode: '1F476-1F3FE',
          shortcodes: ['baby_tone4'],
          emoji: '👶🏾',
          type: 1,
          order: 115,
          group: 0,
          subgroup: 0,
          skin: 4,
          annotation: 'baby, medium-dark skin tone',
        },
        {
          name: 'BABY, EMOJI MODIFIER FITZPATRICK TYPE-6',
          hexcode: '1F476-1F3FF',
          shortcodes: ['baby_tone5'],
          emoji: '👶🏿',
          type: 1,
          order: 116,
          group: 0,
          subgroup: 0,
          skin: 5,
          annotation: 'baby, dark skin tone',
        },
      ],
    },
  ];

  it('flattens skins and moves them to the root', () => {
    expect(flattenEmojiData(data)).toEqual([
      {
        name: 'BABY',
        hexcode: '1F476',
        shortcodes: ['baby'],
        emoji: '👶',
        type: 1,
        order: 111,
        group: 0,
        subgroup: 0,
        annotation: 'baby',
        tags: ['baby', 'young'],
      },
      {
        name: 'BABY, EMOJI MODIFIER FITZPATRICK TYPE-1-2',
        hexcode: '1F476-1F3FB',
        shortcodes: ['baby_tone1'],
        emoji: '👶🏻',
        type: 1,
        order: 112,
        group: 0,
        subgroup: 0,
        skin: 1,
        annotation: 'baby, light skin tone',
        tags: ['baby', 'young'],
      },
      {
        name: 'BABY, EMOJI MODIFIER FITZPATRICK TYPE-3',
        hexcode: '1F476-1F3FC',
        shortcodes: ['baby_tone2'],
        emoji: '👶🏼',
        type: 1,
        order: 113,
        group: 0,
        subgroup: 0,
        skin: 2,
        annotation: 'baby, medium-light skin tone',
        tags: ['baby', 'young'],
      },
      {
        name: 'BABY, EMOJI MODIFIER FITZPATRICK TYPE-4',
        hexcode: '1F476-1F3FD',
        shortcodes: ['baby_tone3'],
        emoji: '👶🏽',
        type: 1,
        order: 114,
        group: 0,
        subgroup: 0,
        skin: 3,
        annotation: 'baby, medium skin tone',
        tags: ['baby', 'young'],
      },
      {
        name: 'BABY, EMOJI MODIFIER FITZPATRICK TYPE-5',
        hexcode: '1F476-1F3FE',
        shortcodes: ['baby_tone4'],
        emoji: '👶🏾',
        type: 1,
        order: 115,
        group: 0,
        subgroup: 0,
        skin: 4,
        annotation: 'baby, medium-dark skin tone',
        tags: ['baby', 'young'],
      },
      {
        name: 'BABY, EMOJI MODIFIER FITZPATRICK TYPE-6',
        hexcode: '1F476-1F3FF',
        shortcodes: ['baby_tone5'],
        emoji: '👶🏿',
        type: 1,
        order: 116,
        group: 0,
        subgroup: 0,
        skin: 5,
        annotation: 'baby, dark skin tone',
        tags: ['baby', 'young'],
      },
    ]);
  });

  it('inherits tags from parent', () => {
    const actual = flattenEmojiData(data);

    expect(actual[1].tags).toEqual(actual[0].tags);
    expect(actual[2].tags).toEqual(actual[0].tags);
    expect(actual[3].tags).toEqual(actual[0].tags);
    expect(actual[4].tags).toEqual(actual[0].tags);
    expect(actual[5].tags).toEqual(actual[0].tags);
  });
});
