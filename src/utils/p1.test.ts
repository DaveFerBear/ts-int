import { dowork } from "./p1";

// Jest for dowork
describe("dowork", () => {
  it("should return 1", () => {
    expect(dowork()).toBe(1);
  });
});
