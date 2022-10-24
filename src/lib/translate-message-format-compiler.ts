import { Inject, Injectable, Optional } from "@angular/core";
import { TranslateCompiler } from "@ngx-translate/core";
import MessageFormat, { MessageFormatOptions } from "@messageformat/core";
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
  private config: MessageFormatOptions<"string">;

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
    } = {
      ...defaultConfig,
      ...config,
    };

    this.config = { customFormatters, biDiSupport, strict, currency };
  }

  public compile(value: string, lang: string): (params: any) => string {
    return this.getMessageFormatInstance(lang).compile(value);
  }

  public compileTranslations(translations: any, lang: string): any {
    if (typeof translations === "string") {
      return this.compile(translations, lang);
    }

    return Object.keys(translations).reduce<{ [key: string]: any }>(
      (acc, key) => {
        const value = translations[key];
        return { ...acc, [key]: this.compileTranslations(value, lang) };
      },
      {}
    );
  }

  private getMessageFormatInstance(locale: string): MessageFormat {
    if (!this.mfCache.has(locale)) {
      this.mfCache.set(
        locale,
        new MessageFormat<"string">(locale, this.config)
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.mfCache.get(locale)!;
  }
}
