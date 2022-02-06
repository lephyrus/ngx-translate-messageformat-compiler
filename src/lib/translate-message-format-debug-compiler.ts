import { Injectable } from "@angular/core";
import { TranslateMessageFormatCompiler } from "./translate-message-format-compiler";

/* eslint-disable-next-line  no-console */
const log = (...message: string[]) => console.log(tag, ...message);
const tag = "[TranslateMessageFormatCompiler]";

@Injectable()
export class TranslateMessageFormatDebugCompiler extends TranslateMessageFormatCompiler {
  public compile(value: string, lang: string): (params: any) => string {
    log(`COMPILE (${lang})`, value);
    const interpolationFn = super.compile(value, lang);

    return this.wrap(interpolationFn, value);
  }

  public compileTranslations(value: any, lang: string): any {
    log(`COMPILE (${lang})`, value);
    return super.compileTranslations(value, lang);
  }

  private wrap(
    fn: (params: any) => string,
    reference: string
  ): (params: any) => string {
    return (params: any) => {
      log("INTERPOLATE", reference, params);
      return fn(params);
    };
  }
}
