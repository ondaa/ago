/// <reference path="../@types/types.d.ts" />

import { DEFAULT_LANGUAGE } from "./staticValue";

/**
 * config's
 */
export const config: Config = {
  lang: DEFAULT_LANGUAGE,
};

/**
 * set global language
 * @param {LANGUAGE} lang
 */
export function setGlobalLang(lang: LANGUAGE) {
  config.lang = lang;
}
