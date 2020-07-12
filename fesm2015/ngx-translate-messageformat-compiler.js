import { InjectionToken, Optional, Inject, Injectable } from '@angular/core';
import { __decorate, __param, __rest } from 'tslib';
import { TranslateCompiler } from '@ngx-translate/core';
import * as MessageFormat from 'messageformat';

const MESSAGE_FORMAT_CONFIG = new InjectionToken("MESSAGE_FORMAT_CONFIG");
const defaultConfig = {
    biDiSupport: false,
    formatters: undefined,
    locales: undefined,
    strictNumberSign: false,
    disablePluralKeyChecks: false,
};

/**
 * This compiler expects ICU syntax and compiles the expressions with messageformat.js
 */
let TranslateMessageFormatCompiler = class TranslateMessageFormatCompiler extends TranslateCompiler {
    constructor(config) {
        super();
        const { locales, formatters, biDiSupport, strictNumberSign, disablePluralKeyChecks, } = Object.assign(Object.assign({}, defaultConfig), config);
        this.messageFormat = new MessageFormat(locales);
        if (formatters) {
            this.messageFormat.addFormatters(formatters);
        }
        if (biDiSupport) {
            this.messageFormat.setBiDiSupport(biDiSupport);
        }
        if (strictNumberSign) {
            this.messageFormat.setStrictNumberSign(strictNumberSign);
        }
        if (disablePluralKeyChecks) {
            this.messageFormat.disablePluralKeyChecks();
        }
    }
    compile(value, lang) {
        return this.messageFormat.compile(value, lang);
    }
    compileTranslations(translations, lang) {
        return this.messageFormat.compile(translations, lang);
    }
};
TranslateMessageFormatCompiler.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MESSAGE_FORMAT_CONFIG,] }] }
];
TranslateMessageFormatCompiler = __decorate([
    Injectable(),
    __param(0, Optional()),
    __param(0, Inject(MESSAGE_FORMAT_CONFIG))
], TranslateMessageFormatCompiler);

/* tslint:disable-next-line no-console */
const log = (...message) => console.log(tag, ...message);
const ɵ0 = log;
const tag = "[TranslateMessageFormatCompiler]";
let TranslateMessageFormatDebugCompiler = class TranslateMessageFormatDebugCompiler extends TranslateMessageFormatCompiler {
    compile(value, lang) {
        log(`COMPILE (${lang})`, value);
        const interpolationFn = super.compile(value, lang);
        return this.wrap(interpolationFn, value);
    }
    compileTranslations(value, lang) {
        log(`COMPILE (${lang})`, value);
        const _a = super.compileTranslations(value, lang), { toString } = _a, interpolationFns = __rest(_a, ["toString"]);
        return Object.assign({ toString }, this.wrapRecursively(interpolationFns, value));
    }
    wrap(fn, reference) {
        return (params) => {
            log("INTERPOLATE", reference, params);
            return fn(params);
        };
    }
    wrapRecursively(obj, referenceObj) {
        return Object.keys(obj).reduce((acc, key) => {
            const value = obj[key];
            const referenceValue = referenceObj[key];
            return typeof value === "function"
                ? Object.assign(Object.assign({}, acc), { [key]: this.wrap(value, referenceValue) }) : Object.assign(Object.assign({}, acc), { [key]: this.wrapRecursively(value, referenceValue) });
        }, {});
    }
};
TranslateMessageFormatDebugCompiler = __decorate([
    Injectable()
], TranslateMessageFormatDebugCompiler);

/*
 * Public API Surface of ngx-translate-messageformat-compiler
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MESSAGE_FORMAT_CONFIG, TranslateMessageFormatCompiler, TranslateMessageFormatDebugCompiler, defaultConfig, ɵ0 };
//# sourceMappingURL=ngx-translate-messageformat-compiler.js.map
