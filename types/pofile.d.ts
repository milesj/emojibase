declare module 'pofile' {
  export type POHeaders =
    'Project-Id-Version'|
    'Report-Msgid-Bugs-To'|
    'POT-Creation-Date'|
    'PO-Revision-Date'|
    'Last-Translator'|
    'Language'|
    'Language-Team'|
    'Content-Type'|
    'Content-Transfer-Encoding'|
    'Plural-Forms' |
    'MIME-Version';

  export type POItemMessage = string | string[] | null;

  export class POItem {
    msgid: string;
    msgctxt: POItemMessage;
    references: string[];
    msgid_plural: POItemMessage;
    msgstr: POItemMessage;
    comments: string[];
    extractedComments: string[];
    flags: Record<string, boolean>;
    obsolete: boolean;

    toString(): string;
  }

  interface POItemConstructor {
    new (): POItem;
  }

  export class PO {
    comments: string[];
    extractedComments: string[];
    headers: Record<POHeaders, string>;
    headerOrder: string[];
    items: POItem[];

    static Item: POItemConstructor;
    static parse(data: string): PO;

    toString(): string;
  }


  interface POItemConstructor {
    new (): POItem;
  }

  export default PO;
}
