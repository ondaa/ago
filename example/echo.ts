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
const koreanVersion = getAgo("2022-11-10 12:00:00", { lang: "ko" });
console.log(koreanVersion);

/**
 * display option (choose a keyword)
 */
const displayHour = getAgo("2022-11-10 12:00:00", { display: "HOUR" });
console.log(displayHour);

/**
 * short keyword
 */
const shortKeyword = getAgo("2022-11-10 12:00:00", { short: true });
console.log(shortKeyword);

/**
 * include ago
 */
const includeAgo = getAgo("2022-11-10 12:00:00", { includeAgo: true });
console.log(includeAgo);

/**
 * only number
 */
const onlyNumberOfDate = getAgo("2022-11-10 12:00:00", {
  onlyNumberOfDate: true,
});
console.log(onlyNumberOfDate);
