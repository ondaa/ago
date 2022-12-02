type LANGUAGE = "ko" | "en";

/**
 * Options
 */
interface Options {
  lang?: LANGUAGE;
  display?: DATETIME_KEY;
}

/**
 * Transfer Property
 */
interface LANGUAGE_TRANSFER {
  year: string;
  month: string;
  week: string;
  day: string;
  hour: string;
  minute: string;
  seconds: string;
  ago: string;
}

/**
 * Global Config
 */
interface Config {
  lang: LANGUAGE;
}

/**
 * DATETIME KEYS
 */
type DATETIME_KEY =
  | "YEAR"
  | "MONTH"
  | "WEEK"
  | "DAY"
  | "HOUR"
  | "MINUTE"
  | "SECONDS";
