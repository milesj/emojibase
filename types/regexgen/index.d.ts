declare module 'regexgen' {
  export class Trie {
    add(word: string): void;
    addAll(words: string[]): void;
    minimize(): void;
    toString(flags?: string): string;
    toRegExp(flags?: string): RegExp;
  }
}
