import joinShortcodes from '../src/joinShortcodes';
import { Emoji } from '../src/types';

function createList(): Emoji[] {
  return [
    {
      annotation: 'FREE button',
      name: 'SQUARED FREE',
      hexcode: '1F193',
      tags: ['free', 'free button'],
      emoji: '🆓',
      text: '',
      type: 1,
      order: 3819,
      group: 8,
      subgroup: 95,
      version: 0.6,
    },
    {
      annotation: 'information',
      name: 'INFORMATION SOURCE',
      hexcode: '2139',
      tags: ['i'],
      emoji: 'ℹ️',
      text: 'ℹ︎',
      type: 0,
      order: 3821,
      group: 8,
      subgroup: 95,
      version: 0.6,
    },
    {
      annotation: 'ID button',
      name: 'SQUARED ID',
      hexcode: '1F194',
      tags: ['id', 'id button', 'identity'],
      emoji: '🆔',
      text: '',
      type: 1,
      order: 3822,
      group: 8,
      subgroup: 95,
      version: 0.6,
    },
  ];
}

describe('joinShortcodes()', () => {
  it('adds all matching hexcodes to shortcodes list', () => {
    const emojis = joinShortcodes(createList(), [
      { '2139': 'information', '1F193': ['free'] },
      { '2139': 'info' },
      { '1F193': 'free_button', '2139': ['info_source', 'info'] },
    ]);

    expect(emojis[0].shortcodes).toEqual(['free', 'free_button']);
    expect(emojis[1].shortcodes).toEqual(['information', 'info', 'info_source']);
    expect(emojis[2].shortcodes).toEqual([]);
  });

  it('sets empty list if no matching datasets', () => {
    const emojis = joinShortcodes(createList(), [{ '0000': 'shortcode' }]);

    expect(emojis[0].shortcodes).toEqual([]);
    expect(emojis[1].shortcodes).toEqual([]);
    expect(emojis[2].shortcodes).toEqual([]);
  });

  it('doesnt set property if no datasets', () => {
    const emojis = joinShortcodes(createList(), []);

    expect(emojis[0].shortcodes).toBeUndefined();
    expect(emojis[1].shortcodes).toBeUndefined();
    expect(emojis[2].shortcodes).toBeUndefined();
  });
});
