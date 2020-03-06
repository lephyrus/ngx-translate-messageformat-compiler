# ngx-translate-messageformat-compiler

> Compiler for ngx-translate that uses messageformat.js to compile translations using ICU syntax for handling pluralization and gender

**[Example App](https://stackblitz.com/edit/ngx-translate-messageformat-compiler-example)** (StackBlitz)

## Table of Contents

* [Installation](#installation)
* [Setup](#setup)
* [Usage](#usage)
* [About](#about)

## Installation

This assumes that you've already installed [ngx-translate](https://github.com/ngx-translate/core).

Using `npm`:
```sh
npm install ngx-translate-messageformat-compiler messageformat --save
```
... or if you use `yarn`:
```sh
yarn add ngx-translate-messageformat-compiler messageformat
```

Something to be aware of if you deploy to strict production environments: [Fundamentally, messageformat is a compiler that turns ICU MessageFormat input into JavaScript.](https://messageformat.github.io/messageformat/page-build) This means it uses `new Function` under the hood which necessicates allowing `unsafe-eval` for the [`script-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) Content Security Policy (CSP).

## Setup

This library currently supports Angular versions 6, 7, 8 and 9 and ngx-translate versions 10, 11, and 12. Check the documentation of @ngx-translate/core to know which of its versions to use, depending on your Angular version.

There are test apps that I use to check compatibility (`ng build` and `ng build --prod`, mainly) here:
https://github.com/lephyrus/messageformat-compiler-test-projects

### Integration with ngx-translate

You need to configure `TranslateModule` so it uses `TranslateMessageFormatCompiler` as the compiler:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateCompiler, TranslateModule } from '@ngx-translate/core';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';

import { AppComponent } from "./app";

@NgModule({
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

You can override the values used when configuring MessageFormat by providing a configuration object for the `MESSAGE_FORMAT_CONFIG` injection token. Here's the default:
```ts
{
  biDiSupport: false,
  formatters: undefined,
  locales: undefined,
  strictNumberSign: false
}
```

### Locale initialization

By default, messageformat initializes *all* locales. It is recommended that you indicate which locales you will need, like this:

```ts
import { MESSAGE_FORMAT_CONFIG } from 'ngx-translate-messageformat-compiler';

@NgModule({
  // ...
  providers: [
    { provide: MESSAGE_FORMAT_CONFIG, useValue: { locales: ['ar', 'fr'] }}
  ]

})
```

The value for `locales` is either a string or an array of strings. The first locale is used as the default locale by messageformat. More info here: https://messageformat.github.io/messageformat/MessageFormat

### Advanced configuration

MessageFormat instances provide some methods to influence its behaviour, among them `addFormatters`, `setBiDiSupport`, and `setStrictNumberSign`. Learn about their meaning here: https://messageformat.github.io/messageformat/MessageFormat

This is how you would enable bi-directional support and add a custom formatter, for example:
```ts
import { MESSAGE_FORMAT_CONFIG } from 'ngx-translate-messageformat-compiler';

@NgModule({
  // ...
  providers: [{
    provide: MESSAGE_FORMAT_CONFIG,
    useValue: {
      biDiSupport: true,
      formatters: { upcase: v => v.toUpperCase() }
    }
  }]
```

## Usage

This library implements neither the syntax used for pluralization (et al) nor the "mechanics" for making translations work in your Angular app. The former is _MessageFormat_, the latter _ngx-translate_. Before you assume your problem is with _ngx-translate-messageformat-compiler_, please consult these ressources:

- Get help on the message syntax for your translation strings: https://messageformat.github.io/messageformat/page-guide
- Get help on using ngx-translate (loading translations, using HTML tags in your strings, translate pipe vs. directive, etc.): https://github.com/ngx-translate/core

Here's two important differences to _ngx-translate_'s default syntax when using *MessageFormat*:

- You lose the ability to access object properties in your placeholders: `'Hello {name.first} {name.last}'` won't work.
- Simple placeholders are enclosed in single curly braces instead of double curly braces: `Hello {name}`

This library also exports `TranslateMessageFormatDebugCompiler`, which you can use as a drop-in replacement for the regular `TranslateMessageFormatCompiler`.
The debug compiler will log to the console whenever a translation string is compiled to an interpolation function, and whenever such a function is called (with interpolation parameters) to compute the final translated string.
The logs may help you figuring out which translation produces an error and the timing of when the individual steps happen.

Here's an example to get you started:

### Example

#### Translation strings:
```json
{
  "things": "There {count, plural, =0{is} one{is} other{are}} {count, plural, =0{} one{a} other{several}} {count, plural, =0{nothing} one{thing} other{things}}",
  "people": "{gender, select, male{He is} female{She is} other{They are}} {how}"
}
```

#### View template:
```html
<ul>
  <li translate [translateParams]="{ count: 0 }">things</li>
  <li translate [translateParams]="{ count: 1 }">things</li>
  <li>{{'things' | translate:"{ count: 2 }"}}</li>
</ul>
<ul>
  <li translate [translateParams]="{ gender: 'female', how: 'influential' }">people</li>
  <li translate [translateParams]="{ gender: 'male', how: 'funny' }">people</li>
  <li>{{'people' | translate:"{ how: 'affectionate' }"}}</li>
</ul>
```

Note that this illustrates using both the directives and the pipe provided by *ngx-translate*. You don't have to mix them, obviously.

#### Output:
```
- There is nothing
- There is a thing
- There are several things

- She is influential
- He is funny
- They are affectionate
```

## About

If you're here, you probably know what you're looking for. If you do wonder what this is, here's a brief explanation.

[ICU Message Format](http://userguide.icu-project.org/formatparse/messages) is a standardized syntax for dealing with the translation of user-visible strings into various languages that may have different requirements for the correct declension of words (e.g. according to number, gender, case) - or to simplify: pluralization.

[Messageformat.js](https://messageformat.github.io/) is a compliant implementation for Javascript.

Back in AngularJS, [angular-translate](https://github.com/angular-translate/angular-translate), formerly by @PascalPrecht, provided support for ICU syntax using messageformat.js.
This compiler "plugin" adds the same rich pluralization support to the excellent [ngx-translate](https://github.com/ngx-translate/core) for Angular (2+).
Thanks to @ocombe for his work and his supporting pluggable compilers in the core. Thanks also to @PascalPrecht for suggesting a contribution when I talked to him about this at Jazoon.
