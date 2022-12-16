type LANGUAGE = "ko" | "en";

/**
 * Options
 */
interface Options {
  lang?: LANGUAGE; // Choose display language
  display?: DATETIME_KEY; // Display result for selected time set
  short?: boolean; // Only include language "en" (ex) year => y
  onlyNumberOfDate?: boolean; // Return Only number value of Date
  includeAgo?: boolean; // Optional auto include "a go" or "전" word
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
