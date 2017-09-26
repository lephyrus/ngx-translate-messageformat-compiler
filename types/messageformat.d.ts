declare interface MessageFormatStatic {
  new(): MessageFormat;
}

declare interface MessageFormat {
  compile(value: any, lang: string): any;
}

declare module 'messageformat' {
  const mf: MessageFormatStatic;
  export = mf;
}
