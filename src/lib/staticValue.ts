export const DEFAULT_LANGUAGE = "ko";

interface ILevel {
  level: number;
  minimum: number; // 1 을 기준으로 하는 milliseconds (1s = 1000, 1m = 60000)
  milliseconds: number; // 1 을 기준으로 하는 milliseconds (1s = 1000, 1m = 60000)
  key: DATETIME_KEY;
}

/**
 * minimum 의 범위 안에 들어오는 경우 해당 Key와 매치
 * 제일 큰 수는 YEAR와 일치한다.
 * ex) 59s 는 1000 * 60 범위 안에 들기 때문에 seconds 라고 본다.
 */
export const LEVEL: ILevel[] = [
  {
    key: "SECONDS",
    minimum: 1000 * 60,
    milliseconds: 1000,
    level: 0,
  },
  {
    key: "MINUTE",
    minimum: 1000 * 60 * 60,
    milliseconds: 1000 * 60,
    level: 1,
  },
  {
    key: "HOUR",
    minimum: 1000 * 60 * 60 * 24,
    milliseconds: 1000 * 60 * 60,
    level: 2,
  },
  {
    key: "DAY",
    minimum: 1000 * 60 * 60 * 24 * 7,
    milliseconds: 1000 * 60 * 60 * 24,
    level: 3,
  },
  {
    key: "WEEK",
    minimum: 1000 * 60 * 60 * 24 * 31,
    milliseconds: 1000 * 60 * 60 * 24 * 7,
    level: 4,
  },
  {
    key: "MONTH",
    minimum: 1000 * 60 * 60 * 24 * 365,
    milliseconds: 1000 * 60 * 60 * 24 * 31,
    level: 5,
  },
  {
    key: "YEAR",
    minimum: Infinity,
    milliseconds: 1000 * 60 * 60 * 24 * 365,
    level: 6,
  },
];

/**
 *
 */
export const LANGUAGES_TRANSFER: { [key in LANGUAGE]: LANGUAGE_TRANSFER } = {
  en: {
    year: "years",
    month: "months",
    week: "weeks",
    day: "days",
    hour: "hours",
    minute: "minutes",
    seconds: "seconds",
    ago: "a go",
  },
  ko: {
    year: "년",
    month: "개월",
    week: "주",
    day: "일",
    hour: "시간",
    minute: "분",
    seconds: "초",
    ago: "전",
  },
};
