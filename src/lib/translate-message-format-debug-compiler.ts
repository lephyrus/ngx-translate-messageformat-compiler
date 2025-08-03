import { Injectable } from "@angular/core";
import { MessageFunction } from "@messageformat/core";
import {
  CompilationResult,
  TranslateMessageFormatCompiler,
} from "./translate-message-format-compiler";

const log = (...message: string[]) => {
  /* eslint-disable-next-line  no-console */
  console.log(tag, ...message);
};
const tag = "[TranslateMessageFormatCompiler]";

@Injectable()
export class TranslateMessageFormatDebugCompiler extends TranslateMessageFormatCompiler {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
  public compile<Result extends CompilationResult = MessageFunction<"string">>(
    value: string,
    lang: string,
  ): Result {
    log(`COMPILE (${lang})`, value);
    const interpolationFn = super.compile(value, lang);

    return isFunction(interpolationFn)
      ? (this.wrap(interpolationFn, value) as Result)
      : (value as Result);
  }

  public compileTranslations(value: any, lang: string): any {
    log(`COMPILE (${lang})`, value);
    return super.compileTranslations(value, lang);
  }

  private wrap(
    fn: MessageFunction<"string">,
    reference: string,
  ): MessageFunction<"string"> {
    return (params: any) => {
      log("INTERPOLATE", reference, params);
      return fn(params);
    };
  }
}

function isFunction(value: any): value is (...params: unknown[]) => unknown {
  return typeof value === "function";
}
