declare module 'kuroshiro' {
  class Kuroshiro {
    constructor();
    init(analyzer: unknown): Promise<void>;
    convert(value: string, options: {
      mode?: 'normal' | 'spaced' | 'okurigana' | 'furigana',
      to?: 'hiragana' | 'katakana' | 'romaji',
      romajiSystem?: 'nippon' | 'passport' | 'hepburn'
    }): Promise<string>;
  }

  export default Kuroshiro;
}

declare module 'kuroshiro-analyzer-kuromoji';
