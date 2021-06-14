import { helloWorld } from "./001-hello-world";

describe("helloWorld", () => {
  it("Should return string of Hello World", async () => {
    const result = helloWorld();
    expect(result).toEqual("Hello World");
  });
});
