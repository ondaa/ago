type LANGUAGE = "ko" | "en";

/**
 * Options
 */
interface Options {
  lang?: LANGUAGE;
}

/**
 * Transfer Property
 */
interface LANGUAGE_TRANSFER {
  year: string;
  month: string;
  day: string;
  week: string;
}
