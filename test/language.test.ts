import { LANGUAGES_TRANSFER } from "../src/lib/staticValue";

describe("language test", () => {
  test("korean", () => {
    expect(LANGUAGES_TRANSFER.ko.year).toBe("년");
    expect(LANGUAGES_TRANSFER.ko.month).toBe("개월");
    expect(LANGUAGES_TRANSFER.ko.week).toBe("주");
    expect(LANGUAGES_TRANSFER.ko.day).toBe("일");
    expect(LANGUAGES_TRANSFER.ko.hour).toBe("시간");
    expect(LANGUAGES_TRANSFER.ko.minute).toBe("분");
    expect(LANGUAGES_TRANSFER.ko.seconds).toBe("초");
  });

  test("english", () => {
    expect(LANGUAGES_TRANSFER.en.year).toBe("years");
    expect(LANGUAGES_TRANSFER.en.month).toBe("months");
    expect(LANGUAGES_TRANSFER.en.week).toBe("weeks");
    expect(LANGUAGES_TRANSFER.en.day).toBe("days");
    expect(LANGUAGES_TRANSFER.en.hour).toBe("hours");
    expect(LANGUAGES_TRANSFER.en.minute).toBe("minutes");
    expect(LANGUAGES_TRANSFER.en.seconds).toBe("seconds");
  });
});
