/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 * @flow
 */

import type { Format } from './types';

export const EXPANDED: Format = 'expanded';
export const STANDARD: Format = 'standard';
export const COMPACT: Format = 'compact';
export const CUSTOM: Format = 'custom';

export const WS_PATTERN: RegExp = /\s+/g;
export const ZWJ_PATTERN: RegExp = /200D/g;
export const VARIATION_PATTERN: RegExp = /FE0E|FE0F/g;
export const MODIFIER_PATERN: RegExp = /1F3FB|1F3FC|1F3FD|1F3FE|1F3FF/g;
export const SEQUENCE_REMOVAL_PATTERN: RegExp = /200D|FE0E|FE0F/g;

export const LATEST_EMOJI_VERSION: string = '5.0';
export const LATEST_UNICODE_VERSION: string = '10.0.0';
