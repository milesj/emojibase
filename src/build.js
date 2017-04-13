#! /usr/bin/env node

import { emojiDataStable, expandEmojiData } from 'unicode-emoji-data';
import emojiOneData from 'emojione/emoji.json';
import createKeywords from './createKeywords';
import createShortnames from './createShortnames';

// Generate a mapping of hexcodes to EmojiOne
const HEXCODE_TO_EMOJIONE = {};
const MISSING_EMOJIONE = [];

Object.keys(emojiOneData).forEach((key) => {
  const emoji = emojiOneData[key];

  HEXCODE_TO_EMOJIONE[emoji.unicode.toUpperCase()] = emoji;
});

// Generate full, standard, and compact datasets
const FULL = [];
const STANDARD = [];
const COMPACT = [];

expandEmojiData(emojiDataStable).forEach((emoji) => {
  let hexcode = emoji.codepoint;

  if (emoji.presentation && emoji.presentation.default) {
    hexcode = emoji.presentation.default.split(' ').join('-');
  }

  // Omit emoji without a codepoint
  if (!hexcode) {
    return;
  }

  const codepointSequence = hexcode.split('-').map(point => parseInt(point, 16));

  // Join values with EmojiOne
  let jointEmoji = {
    hexcode,
    unicode: String.fromCodePoint(...codepointSequence),
    codepoint: codepointSequence.join('-'),
    name: emoji.name,
  };

  if (HEXCODE_TO_EMOJIONE[hexcode]) {
    const oneEmoji = HEXCODE_TO_EMOJIONE[hexcode];

    jointEmoji = {
      ...jointEmoji,
      category: oneEmoji.category,
      keywords: oneEmoji.keywords.length ? oneEmoji.keywords : createKeywords(emoji.name),
      shortnames: [
        oneEmoji.shortname,
        ...oneEmoji.aliases,
      ],
    };
  } else {
    jointEmoji = {
      ...jointEmoji,
      category: 'symbols',
      keywords: createKeywords(emoji.name),
      shortnames: createShortnames(emoji.name),
    };
  }

  // Append to each dataset
  FULL.push(jointEmoji);

  STANDARD.push({
    hexcode,
    unicode: jointEmoji.unicode,
    codepoint: jointEmoji.codepoint,
    name: jointEmoji.name,
    shortname: jointEmoji.shortnames[0],
  });

  COMPACT.push({
    hexcode,
    shortname: jointEmoji.shortnames[0],
  });
});
