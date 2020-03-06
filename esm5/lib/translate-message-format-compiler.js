import { __assign, __decorate, __extends, __param } from "tslib";
import { Inject, Injectable, Optional } from "@angular/core";
import { TranslateCompiler } from "@ngx-translate/core";
import * as MessageFormat from "messageformat";
import { defaultConfig, MESSAGE_FORMAT_CONFIG } from "./message-format-config";
/**
 * This compiler expects ICU syntax and compiles the expressions with messageformat.js
 */
var TranslateMessageFormatCompiler = /** @class */ (function (_super) {
    __extends(TranslateMessageFormatCompiler, _super);
    function TranslateMessageFormatCompiler(config) {
        var _this = _super.call(this) || this;
        var _a = __assign(__assign({}, defaultConfig), config), locales = _a.locales, formatters = _a.formatters, biDiSupport = _a.biDiSupport, strictNumberSign = _a.strictNumberSign;
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
export { TranslateMessageFormatCompiler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLW1lc3NhZ2UtZm9ybWF0LWNvbXBpbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRyYW5zbGF0ZS1tZXNzYWdlZm9ybWF0LWNvbXBpbGVyLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS1tZXNzYWdlLWZvcm1hdC1jb21waWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sS0FBSyxhQUFhLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFDTCxhQUFhLEVBRWIscUJBQXFCLEVBQ3RCLE1BQU0seUJBQXlCLENBQUM7QUFFakM7O0dBRUc7QUFFSDtJQUFvRCxrREFBaUI7SUFHbkUsd0NBR0UsTUFBNEI7UUFIOUIsWUFLRSxpQkFBTyxTQWtCUjtRQWhCTyxJQUFBLGtEQUdMLEVBSE8sb0JBQU8sRUFBRSwwQkFBVSxFQUFFLDRCQUFXLEVBQUUsc0NBR3pDLENBQUM7UUFFRixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWhELElBQUksVUFBVSxFQUFFO1lBQ2QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLFdBQVcsRUFBRTtZQUNmLEtBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixLQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDMUQ7O0lBQ0gsQ0FBQztJQUVNLGdEQUFPLEdBQWQsVUFBZSxLQUFhLEVBQUUsSUFBWTtRQUN4QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU0sNERBQW1CLEdBQTFCLFVBQTJCLFlBQWlCLEVBQUUsSUFBWTtRQUN4RCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDOztnREE5QkUsUUFBUSxZQUNSLE1BQU0sU0FBQyxxQkFBcUI7O0lBTHBCLDhCQUE4QjtRQUQxQyxVQUFVLEVBQUU7UUFLUixXQUFBLFFBQVEsRUFBRSxDQUFBO1FBQ1YsV0FBQSxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQTtPQUxyQiw4QkFBOEIsQ0FtQzFDO0lBQUQscUNBQUM7Q0FBQSxBQW5DRCxDQUFvRCxpQkFBaUIsR0FtQ3BFO1NBbkNZLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlQ29tcGlsZXIgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuaW1wb3J0ICogYXMgTWVzc2FnZUZvcm1hdCBmcm9tIFwibWVzc2FnZWZvcm1hdFwiO1xuaW1wb3J0IHtcbiAgZGVmYXVsdENvbmZpZyxcbiAgTWVzc2FnZUZvcm1hdENvbmZpZyxcbiAgTUVTU0FHRV9GT1JNQVRfQ09ORklHXG59IGZyb20gXCIuL21lc3NhZ2UtZm9ybWF0LWNvbmZpZ1wiO1xuXG4vKipcbiAqIFRoaXMgY29tcGlsZXIgZXhwZWN0cyBJQ1Ugc3ludGF4IGFuZCBjb21waWxlcyB0aGUgZXhwcmVzc2lvbnMgd2l0aCBtZXNzYWdlZm9ybWF0LmpzXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVNZXNzYWdlRm9ybWF0Q29tcGlsZXIgZXh0ZW5kcyBUcmFuc2xhdGVDb21waWxlciB7XG4gIHByaXZhdGUgbWVzc2FnZUZvcm1hdDogTWVzc2FnZUZvcm1hdDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoTUVTU0FHRV9GT1JNQVRfQ09ORklHKVxuICAgIGNvbmZpZz86IE1lc3NhZ2VGb3JtYXRDb25maWdcbiAgKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGNvbnN0IHsgbG9jYWxlcywgZm9ybWF0dGVycywgYmlEaVN1cHBvcnQsIHN0cmljdE51bWJlclNpZ24gfSA9IHtcbiAgICAgIC4uLmRlZmF1bHRDb25maWcsXG4gICAgICAuLi5jb25maWdcbiAgICB9O1xuXG4gICAgdGhpcy5tZXNzYWdlRm9ybWF0ID0gbmV3IE1lc3NhZ2VGb3JtYXQobG9jYWxlcyk7XG5cbiAgICBpZiAoZm9ybWF0dGVycykge1xuICAgICAgdGhpcy5tZXNzYWdlRm9ybWF0LmFkZEZvcm1hdHRlcnMoZm9ybWF0dGVycyk7XG4gICAgfVxuICAgIGlmIChiaURpU3VwcG9ydCkge1xuICAgICAgdGhpcy5tZXNzYWdlRm9ybWF0LnNldEJpRGlTdXBwb3J0KGJpRGlTdXBwb3J0KTtcbiAgICB9XG4gICAgaWYgKHN0cmljdE51bWJlclNpZ24pIHtcbiAgICAgIHRoaXMubWVzc2FnZUZvcm1hdC5zZXRTdHJpY3ROdW1iZXJTaWduKHN0cmljdE51bWJlclNpZ24pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21waWxlKHZhbHVlOiBzdHJpbmcsIGxhbmc6IHN0cmluZyk6IChwYXJhbXM6IGFueSkgPT4gc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlRm9ybWF0LmNvbXBpbGUodmFsdWUsIGxhbmcpO1xuICB9XG5cbiAgcHVibGljIGNvbXBpbGVUcmFuc2xhdGlvbnModHJhbnNsYXRpb25zOiBhbnksIGxhbmc6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZUZvcm1hdC5jb21waWxlKHRyYW5zbGF0aW9ucywgbGFuZyk7XG4gIH1cbn1cbiJdfQ==