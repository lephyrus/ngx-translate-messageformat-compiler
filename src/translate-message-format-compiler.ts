import { TranslateCompiler } from '@ngx-translate/core';
import * as MessageFormat from 'messageformat';

/**
 * This compiler expects ICU syntax and compiles the expressions with messageformat.js
 */
export class TranslateMessageFormatCompiler extends TranslateCompiler {
  private messageFormat: MessageFormat;

  constructor(messageFormat: any) {
    super();

    try {
      messageFormat.compile('')();
    } catch (e) {
      throw new TypeError([
        `Not a messageformat instance: ${messageFormat}`,
        `Please pass a messageformat instance to the TranslateMessageFormatCompiler constructor.`
      ].join('\n'));
    }

    this.messageFormat = messageFormat as MessageFormat;
  }

  public compile(value: string, lang: string): string | Function {
    return this.messageFormat.compile(value, lang);
  }

  public compileTranslations(translations: any, lang: string): any {
    return this.messageFormat.compile(translations, lang);
  }
}
