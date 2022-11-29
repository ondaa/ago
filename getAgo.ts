/**
 * @develop Park Sung Jin
 */

import dayjs from "dayjs";
import { DEFAULT_LANGUAGE } from "./lib/staticValue";

function getAgo(date: string, options: Options) {
  const lang = options.lang || DEFAULT_LANGUAGE;

  const current = dayjs();
  const ago = dayjs(date);

  current.diff(ago);
}

export default getAgo;
