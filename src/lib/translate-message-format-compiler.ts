import { Inject, Injectable, Optional } from "@angular/core";
import { TranslateCompiler } from "@ngx-translate/core";
import MessageFormat from "messageformat";
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
  private messageFormat: MessageFormat;

  constructor(
    @Optional()
    @Inject(MESSAGE_FORMAT_CONFIG)
    config?: MessageFormatConfig
  ) {
    super();

    const {
      locales,
      formatters,
      biDiSupport,
      strictNumberSign,
      disablePluralKeyChecks,
    } = {
      ...defaultConfig,
      ...config,
    };

    this.messageFormat = new MessageFormat(locales);

    if (formatters) {
      this.messageFormat.addFormatters(formatters);
    }
    if (biDiSupport) {
      this.messageFormat.setBiDiSupport(biDiSupport);
    }
    if (strictNumberSign) {
      this.messageFormat.setStrictNumberSign(strictNumberSign);
    }
    if (disablePluralKeyChecks) {
      this.messageFormat.disablePluralKeyChecks();
    }
  }

  public compile(value: string, lang: string): (params: any) => string {
    return this.messageFormat.compile(value, lang);
  }

  public compileTranslations(translations: any, lang: string): any {
    return this.messageFormat.compile(translations, lang);
  }
}
