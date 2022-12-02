import { getAgo } from "../src";

/**
 * Represents a date within a minimum range
 *
 * MIN Seconds
 * MAX Year
 */
const ago = getAgo("2020-11-10 12:00:00");
console.log(ago);

/**
 * transfer language
 */
const transferLanguage = getAgo("2022-11-10 12:00:00", { lang: "en" });
console.log(transferLanguage);

/**
 * display option (choose a keyword)
 */
const onlyDay = getAgo("2022-11-10 12:00:00", { display: "HOUR" });
console.log(onlyDay);
