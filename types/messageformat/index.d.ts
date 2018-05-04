interface MessageFormatStatic {
  new (): MessageFormat;
}

interface MessageFormat {
  compile(value: any, lang: string): any;
  setBiDiSupport(enable: boolean): MessageFormat;
  setIntlSupport(enable: boolean): MessageFormat;
  setStrictNumberSign(enable: boolean): MessageFormat;
}

declare module "messageformat" {
  const mf: MessageFormatStatic;
  export = mf;
}
