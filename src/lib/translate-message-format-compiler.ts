import { Inject, Injectable, Optional } from "@angular/core";
import { TranslateCompiler } from "@ngx-translate/core";
import MessageFormat, {
  MessageFormatOptions,
  MessageFunction,
} from "@messageformat/core";
import {
  defaultConfig,
  MessageFormatConfig,
  MESSAGE_FORMAT_CONFIG,
} from "./message-format-config";

/**
 * This compiler expects ICU syntax and compiles the expressions with messageformat.js
 */
@Injectable()
export class TranslateMessageFormatCompiler extends TranslateCompiler {
  private mfCache = new Map<string, MessageFormat>();
  private messageFormatOptions: MessageFormatOptions<"string">;
  private throwOnError: boolean;

  constructor(
    @Optional()
    @Inject(MESSAGE_FORMAT_CONFIG)
    config?: MessageFormatConfig
  ) {
    super();

    const {
      formatters: customFormatters,
      biDiSupport,
      strictNumberSign: strict,
      currency,
      strictPluralKeys,
      throwOnError,
    } = {
      ...defaultConfig,
      ...config,
    };

    this.messageFormatOptions = {
      customFormatters,
      biDiSupport,
      strict,
      currency,
      strictPluralKeys,
    };
    this.throwOnError = !!throwOnError;
  }

  public compile(value: string, lang: string): (params: any) => string {
    let result: MessageFunction<"string">;

    try {
      result = this.getMessageFormatInstance(lang).compile(value);
    } catch (err) {
      if (this.throwOnError) {
        throw err;
      }

      console.error(err);
      console.error(
        `[ngx-translate-messageformat-compiler] Could not compile message for lang '${lang}': '${value}'`
      );
      result = compileFallback(value, lang);
    }

    if (!this.throwOnError) {
      result = wrapInterpolationFunction(result, value);
    }

    return result;
  }

  public compileTranslations(translations: any, lang: string): any {
    if (typeof translations === "string") {
      return this.compile(translations, lang);
    }

    return Object.keys(translations).reduce<{ [key: string]: any }>(
      (acc, key) => {
        const value = translations[key];
        acc[key] = this.compileTranslations(value, lang);
        return acc;
      },
      {}
    );
  }

  private getMessageFormatInstance(locale: string): MessageFormat {
    if (!this.mfCache.has(locale)) {
      this.mfCache.set(
        locale,
        new MessageFormat<"string">(locale, this.messageFormatOptions)
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.mfCache.get(locale)!;
  }
}

function wrapInterpolationFunction(
  fn: MessageFunction<"string">,
  message: string
): MessageFunction<"string"> {
  return (params: any) => {
    let result: string = message;

    try {
      result = fn(params);
    } catch (err) {
      console.error(err);
      console.error(
        `[ngx-translate-messageformat-compiler] Could not interpolate '${message}' with params '${params}'`
      );
    }

    return result;
  };
}

function compileFallback(
  message: string,
  lang: string
): MessageFunction<"string"> {
  return () => {
    console.warn(
      `[ngx-translate-messageformat-compiler] Falling back to original invalid message: '${message}' ('${lang}')`
    );

    return String(message);
  };
}
