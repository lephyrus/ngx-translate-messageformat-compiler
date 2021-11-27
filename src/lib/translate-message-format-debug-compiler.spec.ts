import { TranslateMessageFormatCompiler } from "./translate-message-format-compiler";
import { TranslateMessageFormatDebugCompiler } from "./translate-message-format-debug-compiler";

/* eslint-disable no-console */
describe("TranslateMessageFormatDebugCompiler", () => {
  let compiler: TranslateMessageFormatCompiler;

  beforeEach(() => {
    spyOn(console, "log");
    compiler = new TranslateMessageFormatDebugCompiler();
  });

  it("should log a single compilation", () => {
    compiler.compile("foo", "es");
    expect(console.log).toHaveBeenCalledWith(
      "[TranslateMessageFormatCompiler]",
      "COMPILE (es)",
      "foo"
    );
  });

  it("should log a nested compilation", () => {
    const values = { alpha: { one: "a1", two: "a2" }, beta: "b" };
    compiler.compileTranslations(values, "fr");
    expect(console.log).toHaveBeenCalledWith(
      "[TranslateMessageFormatCompiler]",
      "COMPILE (fr)",
      values
    );
  });

  it("should log interpolations from single compilation", () => {
    const interpolationString = "Very {how}.";
    const interpolationFn = compiler.compile(interpolationString, "en");
    const params = { how: "nice" };

    interpolationFn(params);
    expect(console.log).toHaveBeenCalledWith(
      "[TranslateMessageFormatCompiler]",
      "INTERPOLATE",
      interpolationString,
      params
    );
  });

  it("should log interpolations from nested compilation", () => {
    const interpolationStringObj = { a: { a1: "a1 {x}" }, b: "b {y}" };
    const interpolationFnObj = compiler.compileTranslations(
      interpolationStringObj,
      "en"
    );
    const params = { x: "x", y: "y" };

    expect(interpolationFnObj.a.a1(params)).toBe("a1 x");
    expect(interpolationFnObj.b(params)).toBe("b y");
    expect(console.log).toHaveBeenCalledWith(
      "[TranslateMessageFormatCompiler]",
      "INTERPOLATE",
      "a1 {x}",
      params
    );
    expect(console.log).toHaveBeenCalledWith(
      "[TranslateMessageFormatCompiler]",
      "INTERPOLATE",
      "b {y}",
      params
    );
  });
});
