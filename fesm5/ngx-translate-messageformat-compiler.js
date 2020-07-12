import { InjectionToken, Optional, Inject, Injectable } from '@angular/core';
import { __extends, __assign, __decorate, __param, __spread, __rest } from 'tslib';
import { TranslateCompiler } from '@ngx-translate/core';
import * as MessageFormat from 'messageformat';

var MESSAGE_FORMAT_CONFIG = new InjectionToken("MESSAGE_FORMAT_CONFIG");
var defaultConfig = {
    biDiSupport: false,
    formatters: undefined,
    locales: undefined,
    strictNumberSign: false,
    disablePluralKeyChecks: false,
};

/**
 * This compiler expects ICU syntax and compiles the expressions with messageformat.js
 */
var TranslateMessageFormatCompiler = /** @class */ (function (_super) {
    __extends(TranslateMessageFormatCompiler, _super);
    function TranslateMessageFormatCompiler(config) {
        var _this = _super.call(this) || this;
        var _a = __assign(__assign({}, defaultConfig), config), locales = _a.locales, formatters = _a.formatters, biDiSupport = _a.biDiSupport, strictNumberSign = _a.strictNumberSign, disablePluralKeyChecks = _a.disablePluralKeyChecks;
        _this.messageFormat = new MessageFormat(locales);
        if (formatters) {
            _this.messageFormat.addFormatters(formatters);
        }
        if (biDiSupport) {
            _this.messageFormat.setBiDiSupport(biDiSupport);
        }
        if (strictNumberSign) {
            _this.messageFormat.setStrictNumberSign(strictNumberSign);
        }
        if (disablePluralKeyChecks) {
            _this.messageFormat.disablePluralKeyChecks();
        }
        return _this;
    }
    TranslateMessageFormatCompiler.prototype.compile = function (value, lang) {
        return this.messageFormat.compile(value, lang);
    };
    TranslateMessageFormatCompiler.prototype.compileTranslations = function (translations, lang) {
        return this.messageFormat.compile(translations, lang);
    };
    TranslateMessageFormatCompiler.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MESSAGE_FORMAT_CONFIG,] }] }
    ]; };
    TranslateMessageFormatCompiler = __decorate([
        Injectable(),
        __param(0, Optional()),
        __param(0, Inject(MESSAGE_FORMAT_CONFIG))
    ], TranslateMessageFormatCompiler);
    return TranslateMessageFormatCompiler;
}(TranslateCompiler));

/* tslint:disable-next-line no-console */
var log = function () {
    var message = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        message[_i] = arguments[_i];
    }
    return console.log.apply(console, __spread([tag], message));
};
var ɵ0 = log;
var tag = "[TranslateMessageFormatCompiler]";
var TranslateMessageFormatDebugCompiler = /** @class */ (function (_super) {
    __extends(TranslateMessageFormatDebugCompiler, _super);
    function TranslateMessageFormatDebugCompiler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TranslateMessageFormatDebugCompiler.prototype.compile = function (value, lang) {
        log("COMPILE (" + lang + ")", value);
        var interpolationFn = _super.prototype.compile.call(this, value, lang);
        return this.wrap(interpolationFn, value);
    };
    TranslateMessageFormatDebugCompiler.prototype.compileTranslations = function (value, lang) {
        log("COMPILE (" + lang + ")", value);
        var _a = _super.prototype.compileTranslations.call(this, value, lang), toString = _a.toString, interpolationFns = __rest(_a, ["toString"]);
        return __assign({ toString: toString }, this.wrapRecursively(interpolationFns, value));
    };
    TranslateMessageFormatDebugCompiler.prototype.wrap = function (fn, reference) {
        return function (params) {
            log("INTERPOLATE", reference, params);
            return fn(params);
        };
    };
    TranslateMessageFormatDebugCompiler.prototype.wrapRecursively = function (obj, referenceObj) {
        var _this = this;
        return Object.keys(obj).reduce(function (acc, key) {
            var _a, _b;
            var value = obj[key];
            var referenceValue = referenceObj[key];
            return typeof value === "function"
                ? __assign(__assign({}, acc), (_a = {}, _a[key] = _this.wrap(value, referenceValue), _a)) : __assign(__assign({}, acc), (_b = {}, _b[key] = _this.wrapRecursively(value, referenceValue), _b));
        }, {});
    };
    TranslateMessageFormatDebugCompiler = __decorate([
        Injectable()
    ], TranslateMessageFormatDebugCompiler);
    return TranslateMessageFormatDebugCompiler;
}(TranslateMessageFormatCompiler));

/*
 * Public API Surface of ngx-translate-messageformat-compiler
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MESSAGE_FORMAT_CONFIG, TranslateMessageFormatCompiler, TranslateMessageFormatDebugCompiler, defaultConfig, ɵ0 };
//# sourceMappingURL=ngx-translate-messageformat-compiler.js.map
