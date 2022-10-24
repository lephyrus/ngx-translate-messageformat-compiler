import { TranslateMessageFormatCompiler } from "./translate-message-format-compiler";

describe("TranslateMessageFormatCompiler", () => {
  const toCharCodes = (value: string) =>
    Array.from(value).map((char) => char.charCodeAt(0));

  let compiler: TranslateMessageFormatCompiler;

  describe("constructor", () => {
    it("should configure the messageformat instance with default values", () => {
      compiler = new TranslateMessageFormatCompiler();

      // BiDiSupport: false
      const result = compiler.compile(
        "{0} >> {1} >> {2}",
        "en-US"
      )(["a", "\u05d1", "\u05d2"]);
      expect(toCharCodes(result)).toEqual([
        97, 32, 62, 62, 32, 1489, 32, 62, 62, 32, 1490,
      ]);

      // StrictNumberSign
      const pastryMsg = [
        "{X, plural,",
        "one{{P, select, cookie{a cookie} other{a pie}}}",
        "other{{P, select, cookie{# cookies} other{# pies}}}}",
      ].join(" ");
      expect(compiler.compile(pastryMsg, "en")({ X: 3, P: "pie" })).toBe(
        "3 pies"
      );
    });

    it("should respect passed-in biDiSupport value", () => {
      let result: string;

      compiler = new TranslateMessageFormatCompiler({ biDiSupport: true });
      result = compiler.compile(
        "{0} >> {1} >> {2}",
        "en"
      )(["a", "\u05d1", "\u05d2"]);
      expect(toCharCodes(result)).toEqual([
        8206, 97, 8206, 32, 62, 62, 32, 8206, 1489, 8206, 32, 62, 62, 32, 8206,
        1490, 8206,
      ]);

      compiler = new TranslateMessageFormatCompiler({ biDiSupport: false });
      result = compiler.compile(
        "{0} >> {1} >> {2}",
        "en"
      )(["a", "\u05d1", "\u05d2"]);
      expect(toCharCodes(result)).toEqual([
        97, 32, 62, 62, 32, 1489, 32, 62, 62, 32, 1490,
      ]);
    });

    it("should respect passed-in strictNumberSign value", () => {
      const pastryMsg = [
        "{X, plural,",
        "one{{P, select, cookie{a cookie} other{a pie}}}",
        "other{{P, select, cookie{# cookies} other{# pies}}}}",
      ].join(" ");

      compiler = new TranslateMessageFormatCompiler({ strictNumberSign: true });
      expect(compiler.compile(pastryMsg, "en")({ X: 3, P: "pie" })).toBe(
        "# pies"
      );

      compiler = new TranslateMessageFormatCompiler({
        strictNumberSign: false,
      });
      expect(compiler.compile(pastryMsg, "en")({ X: 3, P: "pie" })).toBe(
        "3 pies"
      );
    });

    it("should respect passed-in formatters", () => {
      const formatters = {
        locale: (_v: any, lc: string) => lc,
        prop: (v: any, _lc: any, p: any) => v[p],
        upcase: (v: any) => v.toUpperCase(),
      };
      const messages = {
        answer: "Answer: {obj, prop, a}",
        describe: "This is {VAR, upcase}.",
        locale: "The current locale is {_, locale}.",
      };

      compiler = new TranslateMessageFormatCompiler({ formatters });

      expect(compiler.compile(messages.describe, "en-GB")({ VAR: "big" })).toBe(
        "This is BIG."
      );
      expect(compiler.compile(messages.locale, "en-GB")({})).toBe(
        "The current locale is en-GB."
      );
      expect(
        compiler.compile(messages.answer, "en-GB")({ obj: { q: 3, a: 42 } })
      ).toBe("Answer: 42");
    });

    it("should respect passed-in currency value", () => {
      const message = "Loan amount: {X, number, currency}";

      compiler = new TranslateMessageFormatCompiler({ currency: "USD" });
      expect(compiler.compile(message, "en")({ X: 3485.051 })).toBe(
        "Loan amount: $3,485.05"
      );

      compiler = new TranslateMessageFormatCompiler({ currency: "EUR" });
      expect(compiler.compile(message, "en")({ X: 3485.051 })).toBe(
        "Loan amount: €3,485.05"
      );
    });
  });

  describe("compile", () => {
    let icuString: string;
    let numberIcuString: string;

    beforeEach(() => {
      icuString =
        "{count, plural, =0{No} one{A} other{Several}} {count, plural, one{word} other{words}}";

      numberIcuString = "Pi is approximately {pi, number, integer}";
    });

    beforeEach(() => {
      compiler = new TranslateMessageFormatCompiler();
    });

    it("should return the compilation function for simple locales", () => {
      const result = compiler.compile(icuString, "en");
      expect(result({ count: 1 })).toBe("A word");
    });

    it("should return the compilation function for composed locales", () => {
      const result = compiler.compile(icuString, "en-GB");
      expect(result({ count: 1 })).toBe("A word");
    });

    it("should use the number formatter correctly", () => {
      const result = compiler.compile(numberIcuString, "en");
      expect(result({ pi: Math.PI })).toBe("Pi is approximately 3");
    });
  });

  describe("compileTranslations", () => {
    let translations: object;

    beforeEach(() => {
      translations = {
        alpha: {
          one: "{count, plural, =0{No} one{A} other{Several}} {count, plural, one{word} other{words}}",
          two: "{gender, select, male{He is} female{She is} other{They are}} {how}",
        },
      };
    });

    beforeEach(() => {
      compiler = new TranslateMessageFormatCompiler();
    });

    it("should return a corresponding object of compilation functions for simple locales", () => {
      const result = compiler.compileTranslations(translations, "en");
      expect(result.alpha.one({ count: 1 })).toBe("A word");
      expect(result.alpha.two({ gender: "female", how: "cool" })).toBe(
        "She is cool"
      );
    });

    it("should return a corresponding object of compilation functions for composed locales", () => {
      const result = compiler.compileTranslations(translations, "en-GB");
      expect(result.alpha.one({ count: 1 })).toBe("A word");
      expect(result.alpha.two({ gender: "female", how: "cool" })).toBe(
        "She is cool"
      );
    });
  });
});
