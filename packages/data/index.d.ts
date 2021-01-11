import { Emoji, CompactEmoji, GroupDataset, VersionDataset, ShortcodesDataset } from 'emojibase';

declare module 'emojibase-data/*/shortcodes/*.json' {
  const data: ShortcodesDataset;
  export default data;
}

declare module 'emojibase-data/*/data.json' {
  const data: Emoji[];
  export default data;
}

declare module 'emojibase-data/*/compact.json' {
  const data: CompactEmoji[];
  export default data;
}

declare module 'emojibase-data/*/meta.json' {
  interface GroupMeta {
    key: string;
    message: string;
    order: number;
  }

  const data: { groups: GroupMeta[]; subgroups: GroupMeta[]; };
  export default data;
}

declare module 'emojibase-data/meta/groups.json' {
  const data: GroupDataset;
  export default data;
}

declare module 'emojibase-data/meta/hexcodes.json' {
  const data: string[];
  export default data;
}

declare module 'emojibase-data/meta/unicode.json' {
  const data: string[];
  export default data;
}

declare module 'emojibase-data/versions/emoji.json' {
  const data: VersionDataset;
  export default data;
}

declare module 'emojibase-data/versions/unicode.json' {
  const data: VersionDataset;
  export default data;
}
