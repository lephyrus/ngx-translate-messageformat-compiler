import { __rest } from "tslib";
import { TranslateMessageFormatCompiler } from "./translate-message-format-compiler";
/* tslint:disable-next-line no-console */
const log = (...message) => console.log(tag, ...message);
const ɵ0 = log;
const tag = "[TranslateMessageFormatCompiler]";
export class TranslateMessageFormatDebugCompiler extends TranslateMessageFormatCompiler {
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
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLW1lc3NhZ2UtZm9ybWF0LWRlYnVnLWNvbXBpbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRyYW5zbGF0ZS1tZXNzYWdlZm9ybWF0LWNvbXBpbGVyLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS1tZXNzYWdlLWZvcm1hdC1kZWJ1Zy1jb21waWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFckYseUNBQXlDO0FBQ3pDLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxPQUFpQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDOztBQUNuRSxNQUFNLEdBQUcsR0FBRyxrQ0FBa0MsQ0FBQztBQUUvQyxNQUFNLE9BQU8sbUNBQW9DLFNBQVEsOEJBQThCO0lBQzlFLE9BQU8sQ0FBQyxLQUFhLEVBQUUsSUFBWTtRQUN4QyxHQUFHLENBQUMsWUFBWSxJQUFJLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoQyxNQUFNLGVBQWUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVuRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSxtQkFBbUIsQ0FBQyxLQUFVLEVBQUUsSUFBWTtRQUNqRCxHQUFHLENBQUMsWUFBWSxJQUFJLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoQyxNQUFNLDJDQUdMLEVBSEssRUFBRSxRQUFRLE9BR2YsRUFIaUIsMkNBR2pCLENBQUM7UUFFRix1QkFBUyxRQUFRLElBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsRUFBRztJQUN4RSxDQUFDO0lBRU8sSUFBSSxDQUNWLEVBQTJCLEVBQzNCLFNBQWlCO1FBRWpCLE9BQU8sQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUNyQixHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN0QyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUM7SUFDSixDQUFDO0lBRU8sZUFBZSxDQUFDLEdBQVEsRUFBRSxZQUFpQjtRQUNqRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBUSxFQUFFLEdBQVcsRUFBRSxFQUFFO1lBQ3ZELE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixNQUFNLGNBQWMsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFekMsT0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVO2dCQUNoQyxDQUFDLGlDQUFNLEdBQUcsS0FBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxJQUNuRCxDQUFDLGlDQUFNLEdBQUcsS0FBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxHQUFFLENBQUM7UUFDckUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRlTWVzc2FnZUZvcm1hdENvbXBpbGVyIH0gZnJvbSBcIi4vdHJhbnNsYXRlLW1lc3NhZ2UtZm9ybWF0LWNvbXBpbGVyXCI7XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlICovXG5jb25zdCBsb2cgPSAoLi4ubWVzc2FnZTogc3RyaW5nW10pID0+IGNvbnNvbGUubG9nKHRhZywgLi4ubWVzc2FnZSk7XG5jb25zdCB0YWcgPSBcIltUcmFuc2xhdGVNZXNzYWdlRm9ybWF0Q29tcGlsZXJdXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVNZXNzYWdlRm9ybWF0RGVidWdDb21waWxlciBleHRlbmRzIFRyYW5zbGF0ZU1lc3NhZ2VGb3JtYXRDb21waWxlciB7XG4gIHB1YmxpYyBjb21waWxlKHZhbHVlOiBzdHJpbmcsIGxhbmc6IHN0cmluZyk6IChwYXJhbXM6IGFueSkgPT4gc3RyaW5nIHtcbiAgICBsb2coYENPTVBJTEUgKCR7bGFuZ30pYCwgdmFsdWUpO1xuICAgIGNvbnN0IGludGVycG9sYXRpb25GbiA9IHN1cGVyLmNvbXBpbGUodmFsdWUsIGxhbmcpO1xuXG4gICAgcmV0dXJuIHRoaXMud3JhcChpbnRlcnBvbGF0aW9uRm4sIHZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBjb21waWxlVHJhbnNsYXRpb25zKHZhbHVlOiBhbnksIGxhbmc6IHN0cmluZyk6IGFueSB7XG4gICAgbG9nKGBDT01QSUxFICgke2xhbmd9KWAsIHZhbHVlKTtcbiAgICBjb25zdCB7IHRvU3RyaW5nLCAuLi5pbnRlcnBvbGF0aW9uRm5zIH0gPSBzdXBlci5jb21waWxlVHJhbnNsYXRpb25zKFxuICAgICAgdmFsdWUsXG4gICAgICBsYW5nXG4gICAgKTtcblxuICAgIHJldHVybiB7IHRvU3RyaW5nLCAuLi50aGlzLndyYXBSZWN1cnNpdmVseShpbnRlcnBvbGF0aW9uRm5zLCB2YWx1ZSkgfTtcbiAgfVxuXG4gIHByaXZhdGUgd3JhcChcbiAgICBmbjogKHBhcmFtczogYW55KSA9PiBzdHJpbmcsXG4gICAgcmVmZXJlbmNlOiBzdHJpbmdcbiAgKTogKHBhcmFtczogYW55KSA9PiBzdHJpbmcge1xuICAgIHJldHVybiAocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgIGxvZyhcIklOVEVSUE9MQVRFXCIsIHJlZmVyZW5jZSwgcGFyYW1zKTtcbiAgICAgIHJldHVybiBmbihwYXJhbXMpO1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHdyYXBSZWN1cnNpdmVseShvYmo6IGFueSwgcmVmZXJlbmNlT2JqOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZSgoYWNjOiBhbnksIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgY29uc3QgcmVmZXJlbmNlVmFsdWUgPSByZWZlcmVuY2VPYmpba2V5XTtcblxuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8geyAuLi5hY2MsIFtrZXldOiB0aGlzLndyYXAodmFsdWUsIHJlZmVyZW5jZVZhbHVlKSB9XG4gICAgICAgIDogeyAuLi5hY2MsIFtrZXldOiB0aGlzLndyYXBSZWN1cnNpdmVseSh2YWx1ZSwgcmVmZXJlbmNlVmFsdWUpIH07XG4gICAgfSwge30pO1xuICB9XG59XG4iXX0=