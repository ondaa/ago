export const DEFAULT_LANGUAGE = "ko";

export const TIME_PART = {
  DAY: 1000 * 60 * 60 * 24,
  HOUR: 1000 * 60 * 60,
  MINUTE: 1000 * 60,
  SECONDS: 1000,
};

export const LANGUAGES_TRANSFER: { [key in LANGUAGE]: LANGUAGE_TRANSFER } = {
  en: {
    day: "day",
    month: "month",
    week: "week",
    year: "year",
  },
  ko: {
    day: "일",
    month: "월",
    week: "주",
    year: "년",
  },
};
