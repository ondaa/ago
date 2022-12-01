/// <reference path="../@types/types.d.ts" />
import { DEFAULT_LANGUAGE } from "./staticValue";

/**
 * config's
 */
export const config: Config = {
  lang: DEFAULT_LANGUAGE,
};

/**
 * set language
 * @param {LANGUAGE} lang
 */
export function setLang(lang: LANGUAGE) {
  config.lang = lang;
}
