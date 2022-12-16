/**
 * @develop Park Sung Jin
 */

import dayjs from "dayjs";
import { config } from "./lib/config";
import { LANGUAGES_TRANSFER, LEVEL } from "./lib/staticValue";

/**
 *
 * @param {string} date date to compare
 * @param {Options} options option's
 * @returns string
 */
function getAgo(date: string, options: Options = {}): number | string | null {
  const lang = options.lang || config.lang;
  const includeAgo = options.includeAgo || false;
  const t = LANGUAGES_TRANSFER[lang];

  const current = dayjs();
  const ago = dayjs(date);
  const dt = ago.diff(current); // current time distance
  const abs = dt * -1;

  // abs가 음수인 경우 미래 시간으로 간주한다.
  if (abs < 0) return null;

  const limit = LEVEL.find(({ minimum, key }) => {
    if (options.display) {
      return options.display === key;
    }

    return minimum > abs;
  });

  if (limit) {
    const rest = Math.floor(abs / limit.milliseconds);

    if (options.onlyNumberOfDate) {
      return rest;
    }

    const key = limit.key.toLowerCase() as keyof typeof t;
    const keyword = options.short ? t[key][0] : t[key];

    let result = rest + " " + keyword;

    if (includeAgo) {
      result += " " + t.ago;
    }

    return result;
  }

  return dt;
}

export default getAgo;
