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
