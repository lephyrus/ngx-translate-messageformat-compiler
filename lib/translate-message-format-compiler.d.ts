import { TranslateCompiler } from "@ngx-translate/core";
import { MessageFormatConfig } from "./message-format-config";
/**
 * This compiler expects ICU syntax and compiles the expressions with messageformat.js
 */
export declare class TranslateMessageFormatCompiler extends TranslateCompiler {
    private messageFormat;
    constructor(config?: MessageFormatConfig);
    compile(value: string, lang: string): (params: any) => string;
    compileTranslations(translations: any, lang: string): any;
}
