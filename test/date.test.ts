import getAgo from "../getAgo";

describe("date test", () => {
  test("getAgo() is current date between parameter date value", () => {
    const distance = getAgo("2022-12-01 10:00");
    console.log(distance);
    expect(typeof distance).toBe("number");
  });
});
