import { InjectionToken } from "@angular/core";

export const MESSAGE_FORMAT_CONFIG = new InjectionToken<MessageFormatConfig>(
  "MESSAGE_FORMAT_CONFIG"
);

export interface MessageFormatConfig {
  biDiSupport?: boolean;
  locales?: string | string[];
  strictNumberSign?: boolean;
}

export const defaultConfig: MessageFormatConfig = {
  biDiSupport: false,
  locales: undefined,
  strictNumberSign: false
};
