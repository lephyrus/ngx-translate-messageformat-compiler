import { __assign, __extends, __read, __rest, __spread } from "tslib";
import { TranslateMessageFormatCompiler } from "./translate-message-format-compiler";
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
    return TranslateMessageFormatDebugCompiler;
}(TranslateMessageFormatCompiler));
export { TranslateMessageFormatDebugCompiler };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLW1lc3NhZ2UtZm9ybWF0LWRlYnVnLWNvbXBpbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRyYW5zbGF0ZS1tZXNzYWdlZm9ybWF0LWNvbXBpbGVyLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS1tZXNzYWdlLWZvcm1hdC1kZWJ1Zy1jb21waWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFckYseUNBQXlDO0FBQ3pDLElBQU0sR0FBRyxHQUFHO0lBQUMsaUJBQW9CO1NBQXBCLFVBQW9CLEVBQXBCLHFCQUFvQixFQUFwQixJQUFvQjtRQUFwQiw0QkFBb0I7O0lBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxPQUFYLE9BQU8sWUFBSyxHQUFHLEdBQUssT0FBTztBQUEzQixDQUE0QixDQUFDOztBQUNuRSxJQUFNLEdBQUcsR0FBRyxrQ0FBa0MsQ0FBQztBQUUvQztJQUF5RCx1REFBOEI7SUFBdkY7O0lBc0NBLENBQUM7SUFyQ1EscURBQU8sR0FBZCxVQUFlLEtBQWEsRUFBRSxJQUFZO1FBQ3hDLEdBQUcsQ0FBQyxjQUFZLElBQUksTUFBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQU0sZUFBZSxHQUFHLGlCQUFNLE9BQU8sWUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFbkQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0saUVBQW1CLEdBQTFCLFVBQTJCLEtBQVUsRUFBRSxJQUFZO1FBQ2pELEdBQUcsQ0FBQyxjQUFZLElBQUksTUFBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQU0saUVBR0wsRUFITyxzQkFBUSxFQUFFLDJDQUdqQixDQUFDO1FBRUYsa0JBQVMsUUFBUSxVQUFBLElBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsRUFBRztJQUN4RSxDQUFDO0lBRU8sa0RBQUksR0FBWixVQUNFLEVBQTJCLEVBQzNCLFNBQWlCO1FBRWpCLE9BQU8sVUFBQyxNQUFXO1lBQ2pCLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTyw2REFBZSxHQUF2QixVQUF3QixHQUFRLEVBQUUsWUFBaUI7UUFBbkQsaUJBU0M7UUFSQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBUSxFQUFFLEdBQVc7O1lBQ25ELElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixJQUFNLGNBQWMsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFekMsT0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVO2dCQUNoQyxDQUFDLHVCQUFNLEdBQUcsZ0JBQUcsR0FBRyxJQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxPQUNuRCxDQUFDLHVCQUFNLEdBQUcsZ0JBQUcsR0FBRyxJQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxNQUFFLENBQUM7UUFDckUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUNILDBDQUFDO0FBQUQsQ0FBQyxBQXRDRCxDQUF5RCw4QkFBOEIsR0FzQ3RGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRlTWVzc2FnZUZvcm1hdENvbXBpbGVyIH0gZnJvbSBcIi4vdHJhbnNsYXRlLW1lc3NhZ2UtZm9ybWF0LWNvbXBpbGVyXCI7XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlICovXG5jb25zdCBsb2cgPSAoLi4ubWVzc2FnZTogc3RyaW5nW10pID0+IGNvbnNvbGUubG9nKHRhZywgLi4ubWVzc2FnZSk7XG5jb25zdCB0YWcgPSBcIltUcmFuc2xhdGVNZXNzYWdlRm9ybWF0Q29tcGlsZXJdXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVNZXNzYWdlRm9ybWF0RGVidWdDb21waWxlciBleHRlbmRzIFRyYW5zbGF0ZU1lc3NhZ2VGb3JtYXRDb21waWxlciB7XG4gIHB1YmxpYyBjb21waWxlKHZhbHVlOiBzdHJpbmcsIGxhbmc6IHN0cmluZyk6IChwYXJhbXM6IGFueSkgPT4gc3RyaW5nIHtcbiAgICBsb2coYENPTVBJTEUgKCR7bGFuZ30pYCwgdmFsdWUpO1xuICAgIGNvbnN0IGludGVycG9sYXRpb25GbiA9IHN1cGVyLmNvbXBpbGUodmFsdWUsIGxhbmcpO1xuXG4gICAgcmV0dXJuIHRoaXMud3JhcChpbnRlcnBvbGF0aW9uRm4sIHZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBjb21waWxlVHJhbnNsYXRpb25zKHZhbHVlOiBhbnksIGxhbmc6IHN0cmluZyk6IGFueSB7XG4gICAgbG9nKGBDT01QSUxFICgke2xhbmd9KWAsIHZhbHVlKTtcbiAgICBjb25zdCB7IHRvU3RyaW5nLCAuLi5pbnRlcnBvbGF0aW9uRm5zIH0gPSBzdXBlci5jb21waWxlVHJhbnNsYXRpb25zKFxuICAgICAgdmFsdWUsXG4gICAgICBsYW5nXG4gICAgKTtcblxuICAgIHJldHVybiB7IHRvU3RyaW5nLCAuLi50aGlzLndyYXBSZWN1cnNpdmVseShpbnRlcnBvbGF0aW9uRm5zLCB2YWx1ZSkgfTtcbiAgfVxuXG4gIHByaXZhdGUgd3JhcChcbiAgICBmbjogKHBhcmFtczogYW55KSA9PiBzdHJpbmcsXG4gICAgcmVmZXJlbmNlOiBzdHJpbmdcbiAgKTogKHBhcmFtczogYW55KSA9PiBzdHJpbmcge1xuICAgIHJldHVybiAocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgIGxvZyhcIklOVEVSUE9MQVRFXCIsIHJlZmVyZW5jZSwgcGFyYW1zKTtcbiAgICAgIHJldHVybiBmbihwYXJhbXMpO1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHdyYXBSZWN1cnNpdmVseShvYmo6IGFueSwgcmVmZXJlbmNlT2JqOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZSgoYWNjOiBhbnksIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgY29uc3QgcmVmZXJlbmNlVmFsdWUgPSByZWZlcmVuY2VPYmpba2V5XTtcblxuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8geyAuLi5hY2MsIFtrZXldOiB0aGlzLndyYXAodmFsdWUsIHJlZmVyZW5jZVZhbHVlKSB9XG4gICAgICAgIDogeyAuLi5hY2MsIFtrZXldOiB0aGlzLndyYXBSZWN1cnNpdmVseSh2YWx1ZSwgcmVmZXJlbmNlVmFsdWUpIH07XG4gICAgfSwge30pO1xuICB9XG59XG4iXX0=