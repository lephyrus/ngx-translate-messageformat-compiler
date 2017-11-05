# ngx-translate-messageformat-compiler

> Compiler for ngx-translate that uses messageformat.js to compile translations using ICU syntax for handling pluralization and gender

* [Installation](#installation)
* [Setup](#setup)
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

## Setup

**Changed setup for v2:** You no longer need to provide a MessageFormat instance.
The compiler will do this. You still need to have `messageformat` installed, of course.
See CHANGELOG for more details.

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

## Usage

This library implements neither the syntax used for pluralization (et al) nor the "mechanics" for making translations work in your Angular app. The former is MessageFormat, the latter ngx-translate. Having said that, here's an example to get you started:

### Example

#### Translation strings:
```json
{
  "things": "There {count, plural, =0{is} one{is} other{are}} {count, plural, =0{} one{a} other{several}} {count, plural, =0{nothing} one{thing} other{things}",
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

#### Output:
```
- There is nothing
- There is a thing
- There are several things
- She is influential
- He is funny
- They are affectionate
```

Please note that while you can still use nesting in your translations (`{ login: { welcome: 'Welcome!' }}`) with respective keys (`login.welcome`), you lose the ability to access object properties in your placeholders: `'Hello {name.first} {name.last}'` won't work. Also note that this format uses single braces instead of double braces for placeholders.

### Further information

Get help on the message syntax for your translation strings: https://messageformat.github.io/guide/

Get help on using ngx-translate (loading translations, using HTML tags in your strings, translate pipe vs. directive, etc.): https://github.com/ngx-translate/core

## About

If you're here, you probably know what you're looking for. If you do wonder what this is, here's a brief explanation.

[ICU Message Format](http://userguide.icu-project.org/formatparse/messages) is a standardized syntax for dealing with the translation of user-visible strings into various languages that may have different requirements for the correct declension of words (e.g. according to number, gender, case) - or to simplify: pluralization.

[Messageformat.js](https://messageformat.github.io/) is a compliant implementation for Javascript.

Back in AngularJS, [angular-translate](https://github.com/angular-translate/angular-translate), formerly by @PascalPrecht, provided support for ICU syntax using messageformat.js.
This compiler "plugin" adds the same rich pluralization support to the excellent [ngx-translate](https://github.com/ngx-translate/core) for Angular (2+).
Thanks to @ocombe for his work and his supporting pluggable compilers in the core. Thanks also to @PascalPrecht for suggesting a contribution when I talked to him about this at Jazoon.
