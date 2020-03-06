import { InjectionToken } from "@angular/core";

export const MESSAGE_FORMAT_CONFIG = new InjectionToken<MessageFormatConfig>(
  "MESSAGE_FORMAT_CONFIG"
);

export interface MessageFormatConfig {
  biDiSupport?: boolean;
  formatters?: {
    [name: string]: (val: any, lc: string, arg?: string) => string;
  };
  locales?: string | string[];
  strictNumberSign?: boolean;
}

export const defaultConfig: MessageFormatConfig = {
  biDiSupport: false,
  formatters: undefined,
  locales: undefined,
  strictNumberSign: false
};
