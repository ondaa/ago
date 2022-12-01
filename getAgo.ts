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
function getAgo(date: string, options: Options = {}) {
  const lang = options.lang || config.lang;
  const transfer = LANGUAGES_TRANSFER[lang];

  const current = dayjs();
  const ago = dayjs(date);
  const dt = ago.diff(current); // current time distance
  const abs = dt * -1;

  // abs가 음수인 경우 미래 시간으로 간주한다.
  if (abs < 0) return null;

  const limit = LEVEL.find(({ milliseconds }) => milliseconds > abs);

  if (limit) {
    const range = [...LEVEL].slice(0, limit.level + 1);
    console.log(range);
  }

  return dt;
}

export default getAgo;
