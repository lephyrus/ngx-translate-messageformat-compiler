import { InjectionToken } from "@angular/core";

export const MESSAGE_FORMAT_CONFIG = new InjectionToken<MessageFormatConfig>(
  "MESSAGE_FORMAT_CONFIG"
);

export interface MessageFormatConfig {
  biDiSupport?: boolean;
  intlSupport?: boolean;
  strictNumberSign?: boolean;
}

export const defaultConfig: MessageFormatConfig = {
  biDiSupport: false,
  intlSupport: false,
  strictNumberSign: false
};
