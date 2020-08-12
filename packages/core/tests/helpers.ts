/* eslint-disable */

// @ts-expect-error
import regeneratorRuntime from 'regenerator-runtime';
import { Emoji, CompactEmoji } from '../src/types';

declare global {
  namespace NodeJS {
    interface Global {
      fetch: any;
      sessionStorage: any;
      localStorage: any;
      regeneratorRuntime: any;
    }
  }
}

export function setupStorage() {
  global.regeneratorRuntime = regeneratorRuntime;

  Object.defineProperty(global, 'sessionStorage', {
    configurable: true,
    value: {
      getItem: jest.fn(),
      setItem: jest.fn(),
    },
  });

  Object.defineProperty(global, 'localStorage', {
    configurable: true,
    value: {
      getItem: jest.fn(),
      setItem: jest.fn(),
    },
  });
}

export function getEmojiWithSkins(): Emoji {
  return {
    annotation: 'waving hand',
    name: 'WAVING HAND SIGN',
    hexcode: '1F44B',
    tags: ['hand', 'wave', 'waving'],
    emoji: '👋',
    text: '',
    type: 1,
    order: 163,
    group: 1,
    subgroup: 15,
    version: 0.6,
    skins: [
      {
        annotation: 'waving hand: light skin tone',
        name: 'WAVING HAND SIGN, EMOJI MODIFIER FITZPATRICK TYPE-1-2',
        hexcode: '1F44B-1F3FB',
        emoji: '👋🏻',
        text: '',
        type: 1,
        order: 164,
        group: 1,
        subgroup: 15,
        version: 1,
        tone: 1,
      },
      {
        annotation: 'waving hand: medium-light skin tone',
        name: 'WAVING HAND SIGN, EMOJI MODIFIER FITZPATRICK TYPE-3',
        hexcode: '1F44B-1F3FC',
        emoji: '👋🏼',
        text: '',
        type: 1,
        order: 165,
        group: 1,
        subgroup: 15,
        version: 1,
        tone: 2,
      },
      {
        annotation: 'waving hand: medium skin tone',
        name: 'WAVING HAND SIGN, EMOJI MODIFIER FITZPATRICK TYPE-4',
        hexcode: '1F44B-1F3FD',
        emoji: '👋🏽',
        text: '',
        type: 1,
        order: 166,
        group: 1,
        subgroup: 15,
        version: 1,
        tone: 3,
      },
      {
        annotation: 'waving hand: medium-dark skin tone',
        name: 'WAVING HAND SIGN, EMOJI MODIFIER FITZPATRICK TYPE-5',
        hexcode: '1F44B-1F3FE',
        emoji: '👋🏾',
        text: '',
        type: 1,
        order: 167,
        group: 1,
        subgroup: 15,
        version: 1,
        tone: 4,
      },
      {
        annotation: 'waving hand: dark skin tone',
        name: 'WAVING HAND SIGN, EMOJI MODIFIER FITZPATRICK TYPE-6',
        hexcode: '1F44B-1F3FF',
        emoji: '👋🏿',
        text: '',
        type: 1,
        order: 168,
        group: 1,
        subgroup: 15,
        version: 1,
        tone: 5,
      },
    ],
  };
}

export function getCompactEmojiWithSkins(): CompactEmoji {
  return {
    annotation: 'waving hand',
    hexcode: '1F44B',
    tags: ['hand', 'wave', 'waving'],
    unicode: '👋',
    order: 163,
    group: 1,
    skins: [
      {
        annotation: 'waving hand: light skin tone',
        hexcode: '1F44B-1F3FB',
        unicode: '👋🏻',
        order: 164,
        group: 1,
      },
      {
        annotation: 'waving hand: medium-light skin tone',
        hexcode: '1F44B-1F3FC',
        unicode: '👋🏼',
        order: 165,
        group: 1,
      },
      {
        annotation: 'waving hand: medium skin tone',
        hexcode: '1F44B-1F3FD',
        unicode: '👋🏽',
        order: 166,
        group: 1,
      },
      {
        annotation: 'waving hand: medium-dark skin tone',
        hexcode: '1F44B-1F3FE',
        unicode: '👋🏾',
        order: 167,
        group: 1,
      },
      {
        annotation: 'waving hand: dark skin tone',
        hexcode: '1F44B-1F3FF',
        unicode: '👋🏿',
        order: 168,
        group: 1,
      },
    ],
  };
}
