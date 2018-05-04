import { TranslateMessageFormatCompiler } from "./translate-message-format-compiler";

describe("TranslateMessageFormatCompiler", () => {
  const toCharCodes = (value: String) =>
    Array.from(value).map(char => char.charCodeAt(0));

  let compiler: TranslateMessageFormatCompiler;

  describe("constructor", () => {
    it("should configure the messageformat instance with default values", () => {
      compiler = new TranslateMessageFormatCompiler();

      // BiDiSupport: false
      const result = compiler.compile("{0} >> {1} >> {2}", "en")([
        "a",
        "\u05d1",
        "\u05d2"
      ]);
      expect(toCharCodes(result)).toEqual([
        97,
        32,
        62,
        62,
        32,
        1489,
        32,
        62,
        62,
        32,
        1490
      ]);

      // IntlSupport: false
      expect(() =>
        compiler.compile("Unix time started on {T, date, full}", "en")
      ).toThrowError('Formatting function "date" not found!');

      // StrictNumberSign
      const pastryMsg = [
        "{X, plural,",
        "one{{P, select, cookie{a cookie} other{a pie}}}",
        "other{{P, select, cookie{# cookies} other{# pies}}}}"
      ].join(" ");
      expect(compiler.compile(pastryMsg, "en")({ X: 3, P: "pie" })).toBe(
        "3 pies"
      );
    });

    it("should respect passed-in biDiSupport value", () => {
      let result: string;

      compiler = new TranslateMessageFormatCompiler({ biDiSupport: true });
      result = compiler.compile("{0} >> {1} >> {2}", "en")([
        "a",
        "\u05d1",
        "\u05d2"
      ]);
      expect(toCharCodes(result)).toEqual([
        8206,
        97,
        8206,
        32,
        62,
        62,
        32,
        8206,
        1489,
        8206,
        32,
        62,
        62,
        32,
        8206,
        1490,
        8206
      ]);

      compiler = new TranslateMessageFormatCompiler({ biDiSupport: false });
      result = compiler.compile("{0} >> {1} >> {2}", "en")([
        "a",
        "\u05d1",
        "\u05d2"
      ]);
      expect(toCharCodes(result)).toEqual([
        97,
        32,
        62,
        62,
        32,
        1489,
        32,
        62,
        62,
        32,
        1490
      ]);
    });

    it("should respect passed-in intlSupport value", () => {
      compiler = new TranslateMessageFormatCompiler({ intlSupport: true });
      expect(
        compiler.compile("Unix time started on {T, date, full}", "en")({ T: 0 })
      ).toBe("Unix time started on Thursday, January 1, 1970");

      compiler = new TranslateMessageFormatCompiler({ intlSupport: false });
      expect(() =>
        compiler.compile("Unix time started on {T, date, full}", "en")
      ).toThrowError('Formatting function "date" not found!');
    });

    it("should respect passed-in strictNumberSign value", () => {
      const pastryMsg = [
        "{X, plural,",
        "one{{P, select, cookie{a cookie} other{a pie}}}",
        "other{{P, select, cookie{# cookies} other{# pies}}}}"
      ].join(" ");

      compiler = new TranslateMessageFormatCompiler({ strictNumberSign: true });
      expect(compiler.compile(pastryMsg, "en")({ X: 3, P: "pie" })).toBe(
        "# pies"
      );

      compiler = new TranslateMessageFormatCompiler({
        strictNumberSign: false
      });
      expect(compiler.compile(pastryMsg, "en")({ X: 3, P: "pie" })).toBe(
        "3 pies"
      );
    });
  });

  describe("compile", () => {
    let icuString: string;

    beforeEach(() => {
      compiler = new TranslateMessageFormatCompiler();
      icuString =
        "{count, plural, =0{No} one{A} other{Several}} {count, plural, one{word} other{words}}";
    });

    it("should return the compilation function", () => {
      const result = compiler.compile(icuString, "en");
      expect(result({ count: 1 })).toBe("A word");
    });
  });

  describe("compileTranslations", () => {
    let translations: Object;

    beforeEach(() => {
      compiler = new TranslateMessageFormatCompiler();
      translations = {
        alpha: {
          one:
            "{count, plural, =0{No} one{A} other{Several}} {count, plural, one{word} other{words}}",
          two:
            "{gender, select, male{He is} female{She is} other{They are}} {how}"
        }
      };
    });

    it("should return a corresponding object of compilation functions", () => {
      const result = compiler.compileTranslations(translations, "en");
      expect(result.alpha.one({ count: 1 })).toBe("A word");
      expect(result.alpha.two({ gender: "female", how: "cool" })).toBe(
        "She is cool"
      );
    });
  });
});
