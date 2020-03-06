import { TranslateMessageFormatCompiler } from "./translate-message-format-compiler";
export declare class TranslateMessageFormatDebugCompiler extends TranslateMessageFormatCompiler {
    compile(value: string, lang: string): (params: any) => string;
    compileTranslations(value: any, lang: string): any;
    private wrap;
    private wrapRecursively;
}
