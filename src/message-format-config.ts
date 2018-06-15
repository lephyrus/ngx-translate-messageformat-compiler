import { InjectionToken } from "@angular/core";

export const MESSAGE_FORMAT_CONFIG = new InjectionToken<MessageFormatConfig>(
  "MESSAGE_FORMAT_CONFIG"
);

export interface MessageFormatConfig {
  biDiSupport?: boolean;
  strictNumberSign?: boolean;
  languages?: string | string[];
}

export const defaultConfig: MessageFormatConfig = {
  biDiSupport: false,
  languages: undefined,
  strictNumberSign: false
};
