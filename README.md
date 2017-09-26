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

You need to configure `TranslateModule` so it uses `TranslateMessageFormatCompiler` as the compiler:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateCompiler, TranslateModule } from '@ngx-translate/core';
import * as MessageFormat from 'messageformat';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { AppComponent } from "./app";

@NgModule({
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      compiler: {
        provide: TranslateCompiler,
        useFactory: () => new TranslateMessageFormatCompiler(new MessageFormat())
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Please note that while you can still use nesting in your translations (`{ login: { welcome: 'Welcome!' }}`) with respective keys (`login.welcome`), you lose the ability to access object properties in your placeholders: `'Hello {name.first} {name.last}'` won't work. Also note that this format uses single braces instead of double braces for placeholders.

## About

If you're here, you probably know what you're looking for. If you do wonder what this is, here's a brief explanation.

[ICU Message Format](http://userguide.icu-project.org/formatparse/messages) is a standardized syntax for dealing with the translation of user-visible strings into various languages that may have different requirements for the correct declension of words (e.g. according to number, gender, case) - or to simplify: pluralization.

[Messageformat.js](https://messageformat.github.io/) is a compliant implementation for Javascript.

Back in Angular 1, [angular-translate](https://github.com/angular-translate/angular-translate), formerly by @PascalPrecht, provided support for ICU syntax using messageformat.js.
This compiler "plugin" adds the same rich pluralization support to the excellent [ngx-translate](https://github.com/ngx-translate/core).
Thanks to @ocombe for his work and his support in getting pluggable compiler support into the core. Thanks also to @PascalPrecht for suggesting a contribution when I talked to him about this at Jazoon.
