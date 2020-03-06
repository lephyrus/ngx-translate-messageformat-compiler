import { __assign, __decorate, __extends, __param } from "tslib";
import { Inject, Optional } from "@angular/core";
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
    TranslateMessageFormatCompiler = __decorate([
        __param(0, Optional()),
        __param(0, Inject(MESSAGE_FORMAT_CONFIG))
    ], TranslateMessageFormatCompiler);
    return TranslateMessageFormatCompiler;
}(TranslateCompiler));
export { TranslateMessageFormatCompiler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLW1lc3NhZ2UtZm9ybWF0LWNvbXBpbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRyYW5zbGF0ZS1tZXNzYWdlZm9ybWF0LWNvbXBpbGVyLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS1tZXNzYWdlLWZvcm1hdC1jb21waWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxLQUFLLGFBQWEsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUNMLGFBQWEsRUFDYixxQkFBcUIsRUFFdEIsTUFBTSx5QkFBeUIsQ0FBQztBQUVqQzs7R0FFRztBQUNIO0lBQW9ELGtEQUFpQjtJQUduRSx3Q0FHRSxNQUE0QjtRQUg5QixZQUtFLGlCQUFPLFNBa0JSO1FBaEJPLElBQUEsa0RBR0wsRUFITyxvQkFBTyxFQUFFLDBCQUFVLEVBQUUsNEJBQVcsRUFBRSxzQ0FHekMsQ0FBQztRQUVGLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFaEQsSUFBSSxVQUFVLEVBQUU7WUFDZCxLQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM5QztRQUNELElBQUksV0FBVyxFQUFFO1lBQ2YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLGdCQUFnQixFQUFFO1lBQ3BCLEtBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUMxRDs7SUFDSCxDQUFDO0lBRU0sZ0RBQU8sR0FBZCxVQUFlLEtBQWEsRUFBRSxJQUFZO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTSw0REFBbUIsR0FBMUIsVUFBMkIsWUFBaUIsRUFBRSxJQUFZO1FBQ3hELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFsQ1UsOEJBQThCO1FBSXRDLFdBQUEsUUFBUSxFQUFFLENBQUE7UUFDVixXQUFBLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO09BTHJCLDhCQUE4QixDQW1DMUM7SUFBRCxxQ0FBQztDQUFBLEFBbkNELENBQW9ELGlCQUFpQixHQW1DcEU7U0FuQ1ksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVDb21waWxlciB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5pbXBvcnQgKiBhcyBNZXNzYWdlRm9ybWF0IGZyb20gXCJtZXNzYWdlZm9ybWF0XCI7XG5cbmltcG9ydCB7XG4gIGRlZmF1bHRDb25maWcsXG4gIE1FU1NBR0VfRk9STUFUX0NPTkZJRyxcbiAgTWVzc2FnZUZvcm1hdENvbmZpZ1xufSBmcm9tIFwiLi9tZXNzYWdlLWZvcm1hdC1jb25maWdcIjtcblxuLyoqXG4gKiBUaGlzIGNvbXBpbGVyIGV4cGVjdHMgSUNVIHN5bnRheCBhbmQgY29tcGlsZXMgdGhlIGV4cHJlc3Npb25zIHdpdGggbWVzc2FnZWZvcm1hdC5qc1xuICovXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlTWVzc2FnZUZvcm1hdENvbXBpbGVyIGV4dGVuZHMgVHJhbnNsYXRlQ29tcGlsZXIge1xuICBwcml2YXRlIG1lc3NhZ2VGb3JtYXQ6IE1lc3NhZ2VGb3JtYXQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KE1FU1NBR0VfRk9STUFUX0NPTkZJRylcbiAgICBjb25maWc/OiBNZXNzYWdlRm9ybWF0Q29uZmlnXG4gICkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBjb25zdCB7IGxvY2FsZXMsIGZvcm1hdHRlcnMsIGJpRGlTdXBwb3J0LCBzdHJpY3ROdW1iZXJTaWduIH0gPSB7XG4gICAgICAuLi5kZWZhdWx0Q29uZmlnLFxuICAgICAgLi4uY29uZmlnXG4gICAgfTtcblxuICAgIHRoaXMubWVzc2FnZUZvcm1hdCA9IG5ldyBNZXNzYWdlRm9ybWF0KGxvY2FsZXMpO1xuXG4gICAgaWYgKGZvcm1hdHRlcnMpIHtcbiAgICAgIHRoaXMubWVzc2FnZUZvcm1hdC5hZGRGb3JtYXR0ZXJzKGZvcm1hdHRlcnMpO1xuICAgIH1cbiAgICBpZiAoYmlEaVN1cHBvcnQpIHtcbiAgICAgIHRoaXMubWVzc2FnZUZvcm1hdC5zZXRCaURpU3VwcG9ydChiaURpU3VwcG9ydCk7XG4gICAgfVxuICAgIGlmIChzdHJpY3ROdW1iZXJTaWduKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VGb3JtYXQuc2V0U3RyaWN0TnVtYmVyU2lnbihzdHJpY3ROdW1iZXJTaWduKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcGlsZSh2YWx1ZTogc3RyaW5nLCBsYW5nOiBzdHJpbmcpOiAocGFyYW1zOiBhbnkpID0+IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZUZvcm1hdC5jb21waWxlKHZhbHVlLCBsYW5nKTtcbiAgfVxuXG4gIHB1YmxpYyBjb21waWxlVHJhbnNsYXRpb25zKHRyYW5zbGF0aW9uczogYW55LCBsYW5nOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLm1lc3NhZ2VGb3JtYXQuY29tcGlsZSh0cmFuc2xhdGlvbnMsIGxhbmcpO1xuICB9XG59XG4iXX0=