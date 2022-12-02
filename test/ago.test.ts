import { getAgo, setGlobalLang } from "../src";

describe("date test", () => {
  test("getAgo() is current date between parameter date value", () => {
    const ago = getAgo("2022-11-11 12:00:00");
    expect(ago).toBe("3 주 전");
  });

  test("global language setting ko -> en", () => {
    setGlobalLang("en");
    const ago = getAgo("2022-11-11 12:00:00");
    expect(ago).toBe("3 weeks a go");
  });
});
