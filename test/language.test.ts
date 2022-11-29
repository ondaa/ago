import { LANGUAGES_TRANSFER } from "../lib/staticValue";

describe("language test", () => {
  test("korean", () => {
    expect(LANGUAGES_TRANSFER.ko.year).toBe("년");
    expect(LANGUAGES_TRANSFER.ko.month).toBe("월");
    expect(LANGUAGES_TRANSFER.ko.week).toBe("주");
    expect(LANGUAGES_TRANSFER.ko.day).toBe("일");
  });

  test("english", () => {
    expect(LANGUAGES_TRANSFER.en.year).toBe("year");
    expect(LANGUAGES_TRANSFER.en.month).toBe("month");
    expect(LANGUAGES_TRANSFER.en.week).toBe("week");
    expect(LANGUAGES_TRANSFER.en.day).toBe("day");
  });
});
