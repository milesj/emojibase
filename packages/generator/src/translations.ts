import { Locale } from 'emojibase';

// These are manually translated as regional indicators should be
// hidden from consumers, and as such, are not localized in CLDR.
export const REGIONAL_INDICATOR_MESSAGES: { [L in Locale]: string } = {
  da: 'regional indikator %s',
  de: 'regionaler Indikator %s.',
  en: 'regional indicator %s',
  'en-gb': 'regional indicator %s',
  es: 'indicador regional %s',
  'es-mx': 'indicador regional %s',
  et: 'piirkondlik näitaja %s',
  fi: 'alueellinen indikaattori %s',
  fr: 'indicateur régional %s',
  hu: 'regionális mutató %s',
  it: 'indicatore regionale %s',
  ja: '地域指標 %s',
  ko: '지역 지표 %s',
  lt: 'regioninis rodiklis %s',
  ms: 'penunjuk wilayah %s',
  nb: 'regional indikator %s',
  nl: 'regionale indicator %s',
  pl: 'wskaźnik regionalny %s',
  pt: 'indicador regional %s',
  ru: 'региональный показатель %s',
  sv: 'regional indikator %s',
  th: 'ตัวบ่งชี้ภูมิภาคก %s',
  uk: 'регіональний показник %s',
  zh: '区域指标 %s',
  'zh-hant': '區域指標 %s',
};
