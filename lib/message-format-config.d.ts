import { InjectionToken } from "@angular/core";
export declare const MESSAGE_FORMAT_CONFIG: InjectionToken<MessageFormatConfig>;
export interface MessageFormatConfig {
    biDiSupport?: boolean;
    formatters?: {
        [name: string]: (val: any, lc: string, arg?: string) => string;
    };
    locales?: string | string[];
    strictNumberSign?: boolean;
    disablePluralKeyChecks?: boolean;
}
export declare const defaultConfig: MessageFormatConfig;
