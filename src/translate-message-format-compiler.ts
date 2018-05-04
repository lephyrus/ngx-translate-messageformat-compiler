import { Inject, Optional } from "@angular/core";
import { TranslateCompiler } from "@ngx-translate/core";
import * as MessageFormatStatic from "messageformat";

import {
  defaultConfig,
  MESSAGE_FORMAT_CONFIG,
  MessageFormatConfig
} from "./message-format-config";

/**
 * This compiler expects ICU syntax and compiles the expressions with messageformat.js
 */
export class TranslateMessageFormatCompiler extends TranslateCompiler {
  private messageFormat: { compile(value: any, lang: string): any };

  constructor(
    @Optional()
    @Inject(MESSAGE_FORMAT_CONFIG)
    config?: MessageFormatConfig
  ) {
    super();

    config = { ...defaultConfig, ...config };

    this.messageFormat = new MessageFormatStatic()
      .setBiDiSupport(config.biDiSupport)
      .setIntlSupport(config.intlSupport)
      .setStrictNumberSign(config.strictNumberSign);
  }

  public compile(value: string, lang: string): () => any {
    return this.messageFormat.compile(value, lang);
  }

  public compileTranslations(translations: any, lang: string): any {
    return this.messageFormat.compile(translations, lang);
  }
}
