export const DEFAULT_LANGUAGE = "ko";

interface ILevel {
  level: number;
  milliseconds: number; // 1 을 기준으로 하는 milliseconds (1s = 1000, 1m = 60000)
  key: DATETIME_KEY;
}

/**
 * milliseconds 의 범위 안에 들어오는 경우 해당 Key와 매치
 * 제일 큰 수는 YEAR와 일치한다.
 * ex) 59s 는 1000 * 60 범위 안에 들기 때문에 seconds 라고 본다.
 */
export const LEVEL: ILevel[] = [
  {
    key: "SECONDS",
    milliseconds: 1000 * 60,
    level: 0,
  },
  {
    key: "MINUTE",
    milliseconds: 1000 * 60 * 60,
    level: 1,
  },
  {
    key: "HOUR",
    milliseconds: 1000 * 60 * 60 * 24,
    level: 2,
  },
  {
    key: "DAY",
    milliseconds: 1000 * 60 * 60 * 24 * 7,
    level: 3,
  },
  {
    key: "WEEK",
    milliseconds: 1000 * 60 * 60 * 24 * 31,
    level: 4,
  },
  {
    key: "MONTH",
    milliseconds: 1000 * 60 * 60 * 24 * 365,
    level: 5,
  },
  {
    key: "YEAR",
    milliseconds: Infinity,
    level: 6,
  },
];

/**
 *
 */
export const LANGUAGES_TRANSFER: { [key in LANGUAGE]: LANGUAGE_TRANSFER } = {
  en: {
    year: "year",
    month: "mon",
    week: "week",
    day: "day",
    hour: "hour",
    minute: "min",
    seconds: "sec",
  },
  ko: {
    year: "년",
    month: "월",
    week: "주",
    day: "일",
    hour: "시간",
    minute: "분",
    seconds: "초",
  },
};
