import { TranslateMessageFormatCompiler } from "./translate-message-format-compiler";

describe("TranslateMessageFormatCompiler", () => {
  const toCharCodes = (value: string) =>
    Array.from(value).map(char => char.charCodeAt(0));

  let compiler: TranslateMessageFormatCompiler;

  describe("constructor", () => {
    it("should configure the messageformat instance with default values", () => {
      compiler = new TranslateMessageFormatCompiler();

      // BiDiSupport: false
      const result = compiler.compile("{0} >> {1} >> {2}", "en-US")([
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

    it("should respect passed-in locales", () => {
      const msg = "{s}";

      // all locales
      compiler = new TranslateMessageFormatCompiler();
      expect(compiler.compile(msg, "en")({ s: "en" })).toBe("en");
      expect(compiler.compileTranslations({ msg }, "fi").msg({ s: "fi" })).toBe(
        "fi"
      );
      expect(compiler.compile(msg, "de-CH")({ s: "de-CH" })).toBe("de-CH");
      expect(
        compiler.compileTranslations({ msg }, "en-UK").msg({ s: "en-GB" })
      ).toBe("en-GB");

      // one locale
      compiler = new TranslateMessageFormatCompiler({ locales: "es" });
      expect(compiler.compile(msg, "es")({ s: "es" })).toBe("es");
      expect(compiler.compileTranslations({ msg }, "es").msg({ s: "es" })).toBe(
        "es"
      );
      expect(() => compiler.compile(msg, "en")({ s: "en" })).toThrowError();
      expect(() =>
        compiler.compileTranslations({ msg }, "en").msg({ s: "en" })
      ).toThrowError();

      // multiple locales
      compiler = new TranslateMessageFormatCompiler({
        locales: ["fr-LU", "it"]
      });
      expect(compiler.compile(msg, "fr-LU")({ s: "fr-LU" })).toBe("fr-LU");
      expect(compiler.compileTranslations({ msg }, "it").msg({ s: "it" })).toBe(
        "it"
      );
      expect(() => compiler.compile(msg, "en")({ s: "en" })).toThrowError();
      expect(() =>
        compiler.compileTranslations(msg, "en").msg({ s: "en" })
      ).toThrowError();
    });
  });

  describe("compile", () => {
    let icuString: string;

    beforeEach(() => {
      icuString =
        "{count, plural, =0{No} one{A} other{Several}} {count, plural, one{word} other{words}}";
    });

    describe("with all locales initialized", () => {
      beforeEach(() => {
        compiler = new TranslateMessageFormatCompiler();
      });

      it("should return the compilation function for simple locales", () => {
        const result = compiler.compile(icuString, "en");
        expect(result({ count: 1 })).toBe("A word");
      });

      xit("should return the compilation function for composed locales", () => {
        // fails, see https://github.com/lephyrus/ngx-translate-messageformat-compiler/pull/29#issuecomment-410052125
        const result = compiler.compile(icuString, "en-GB");
        expect(result({ count: 1 })).toBe("A word");
      });
    });

    describe("with specific locales initialized", () => {
      beforeEach(() => {
        compiler = new TranslateMessageFormatCompiler({
          locales: ["en", "en-GB"]
        });
      });

      it("should return the compilation function for simple locales", () => {
        const result = compiler.compile(icuString, "en");
        expect(result({ count: 1 })).toBe("A word");
      });

      it("should return the compilation function for composed locales", () => {
        const result = compiler.compile(icuString, "en-GB");
        expect(result({ count: 1 })).toBe("A word");
      });
    });
  });

  describe("compileTranslations", () => {
    let translations: object;

    beforeEach(() => {
      translations = {
        alpha: {
          one:
            "{count, plural, =0{No} one{A} other{Several}} {count, plural, one{word} other{words}}",
          two:
            "{gender, select, male{He is} female{She is} other{They are}} {how}"
        }
      };
    });

    describe("with all locales initialized", () => {
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

      xit("should return a corresponding object of compilation functions for composed locales", () => {
        // fails, see https://github.com/lephyrus/ngx-translate-messageformat-compiler/pull/29#issuecomment-410052125
        const result = compiler.compileTranslations(translations, "en-GB");
        expect(result.alpha.one({ count: 1 })).toBe("A word");
        expect(result.alpha.two({ gender: "female", how: "cool" })).toBe(
          "She is cool"
        );
      });
    });

    describe("with specific locales initialized", () => {
      beforeEach(() => {
        compiler = new TranslateMessageFormatCompiler({
          locales: ["en", "en-GB"]
        });
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
});
