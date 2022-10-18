import { InjectionToken } from "@angular/core";
import { CustomFormatter } from "@messageformat/core";

export const MESSAGE_FORMAT_CONFIG = new InjectionToken<MessageFormatConfig>(
  "MESSAGE_FORMAT_CONFIG"
);

export interface MessageFormatConfig {
  biDiSupport?: boolean;
  formatters?: {
    [key: string]: CustomFormatter;
  };
  strictNumberSign?: boolean;
  currency?: string;
}

export const defaultConfig: MessageFormatConfig = {
  biDiSupport: false,
  formatters: undefined,
  strictNumberSign: false,
  currency: "USD",
};
