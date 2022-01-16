declare module "messageformat" {
  type Msg = (params: Record<string, unknown>) => string;
  type Formatter = (val: unknown, lc: string, arg?: string) => string;
  type SrcMessage = string | SrcObject;

  interface SrcObject {
    [key: string]: SrcMessage;
  }
  class MessageFormat {
    public addFormatters: (format: {
      [name: string]: Formatter;
    }) => MessageFormat;
    public disablePluralKeyChecks: () => MessageFormat;
    public setBiDiSupport: (enable: boolean) => MessageFormat;
    public setStrictNumberSign: (enable: boolean) => MessageFormat;
    public compile: (messages: SrcMessage, locale?: string) => Msg;

    constructor(
      message?: { [pluralFuncs: string]: () => void } | string[] | string
    );
  }

  namespace MessageFormat {
    // workaround, see https://github.com/Microsoft/TypeScript/issues/5073
  }

  export = MessageFormat;
}
