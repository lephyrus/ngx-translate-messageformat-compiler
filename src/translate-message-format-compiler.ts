import { TranslateCompiler } from '@ngx-translate/core';
import * as MessageFormatStatic from 'messageformat';

interface MessageFormat {
  compile(value: any, lang: string): any;
}

/**
 * This compiler expects ICU syntax and compiles the expressions with messageformat.js
 */
export class TranslateMessageFormatCompiler extends TranslateCompiler {
  private messageFormat: MessageFormat;

  constructor() {
    super();
    this.messageFormat = new MessageFormatStatic();
  }

  public compile(value: string, lang: string): string | Function {
    return this.messageFormat.compile(value, lang);
  }

  public compileTranslations(translations: any, lang: string): any {
    return this.messageFormat.compile(translations, lang);
  }
}
