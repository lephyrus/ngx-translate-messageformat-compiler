# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [4.7.0] - 2020-04-30
### Added
- Option to disable plural key checks (#39)

## [4.6.0] - 2020-03-08
### Added
- Support for Angular 9 (#49, #53)
- Support for ngx-translate 12 (#56)
### Changed
- Updated dependecy explanation in README
- Added link to app test repos

## [4.5.0] - 2019-06-24
### Added
- Support for Angular 8 (#46)
### Fixed
- Requiring at least messageformat v2.0.5 fixes the issue with
  composed locales when messageformat is not initialized explicit
  locales

## [4.4.0] - 2018-10-28
### Added
- Support for Angular 7 (#38)
- Support for ngx-translate 11

## [4.3.0] - 2018-08-27
### Added
- Option to use MessageFormat with custom formatters (#31)
### Fixed
- Script to (somewhat) automate publishing and avoid the frequent mistakes

## [4.2.0] - 2018-08-11
### Added
- Option to initialize MessageFormat with the required locales (recommended)
### Fixed
- Using composed locales (de-CH) without initializing them leads to an error (upstream issue).
  Now, there's a workaround at least. (#27)

## [4.1.3] - 2018-05-28
### Fixed
- Can I finally get the publishing step right?!

## [4.1.2] - 2018-05-28
### Fixed
- 4.1.1 was missing README in published package

## [4.1.1] - 2018-05-14
### Fixed
- 4.1.0 was incorrectly published :-/

## [4.1.0] - 2018-05-14
### Added
- `TranslateMessageFormatDebugCompiler` is a drop-in replacement
  for the regular compiler with added console logging to help
  debug problems

## [4.0.0] - 2018-05-04
### Added
- Support for @ngrx-translate/core v10
- Support for messageformat v2
- Support for Angular v6

### Removed
- Dropped support for @ngrx-translate/core v8 and v9
- Dropped support for messageformat v1
- Dropped support for `intlSupport` config option (because
  messageformat now always expects `Intl` to exist)
- Dropped support for Angular v3 and v4

## [3.0.1] - 2018-05-04
### Fixed
- Compiling the library with Angular v4 instead of Angular v5
  ensures the generated metadata is usable for AOT compilation
  in both Angular v4 and Angular v5 projects. (#23)

## [3.0.0] - 2018-01-28
### Changed
- The messageformat configuration object is now provided by using
an injection token (MESSAGE_FORMAT_CONFIG) rather than by passing
the configuration to the compiler's constructor using a factory
function.

### Fixed
- Using the compiler without a configuration object for
messageformat remains unchanged and continues working as
before.

### Removed
- The use of InjectionToken requires at least Angular 4, so support
for Angular v2 and ngx-translate <v8 has been dropped.

## [2.2.0] - 2018-01-22
Note: this version was unpublished from the NPM registry because it
broke AOT compilation when not using a factory to pass in a
configuration object, which would have been the case for 100%
of usages prior to this version.

### Added
- Support some configuration of the messageformat instance that's
  created by the compiler on instantiation. Passing an object with
  optional boolean values for `biDiSupport`, `intlSupport` and
  `strictNumberSign` will call the corresponding methods of the
  messageformat instance. They all default to false.

### Changed
- Improved `compile` signature to indicate that the return value
  is always a function.

## [2.1.0] - 2017-12-28
### Added
- Support use with ngx-translate v9

### Changed
- Clarify usage section of README

### Fixed
- Typo in example syntax

## [2.0.1] - 2017-11-05
### Added
- New section in README: Usage (incl. example)

## [2.0.0] - 2017-10-22
### Added
- This CHANGELOG file.

### Changed
- The compiler creates its own MessageFormat instance instead of
  relying on the user to pass one via the constructor.
- Allow Angular up to v5 and ngx-translate up to v8 as peer
  dependencies. (#6)
- Use GitHub template for MIT license.

### Removed
- The `TranslateMessageFormatCompiler` constructor no longer takes
  a MessageFormat instance as a parameter. This simplifies the setup.
  Also, `messageformat` unfortunately does not provide Typescript
  types and therefore requires a minimal type declaration. Not
  exposing this to cosumers of the library saves potential headaches.
  This is obviously a breaking change. (#2)
- `TranslateMessageFormatCompiler` is no longer injectable. The
  `@Injectable` annotation isn't needed when used as recommended and
  the class was probably never injected, but it's still technically
  a breaking change.

## [1.1.1] - 2017-09-27
### Fixed
- Typo in package.json's repo url. (#1)
- Improved some words in README.

## [1.1.0] - 2017-09-27
### Added
- Check to see if (something that looks like) a MessageFormat instance
  was passed to `TranslateMessageFormatCompiler`'s constructor and throw a
  `TypeError` otherwise.

## [1.0.1] - 2017-09-27
### Fixed
- Fix npm release package by making sure the right files are included
  (and excluded) with `.npmignore`.

## [1.0.0] - 2017-09-27
### Added
- Initial release.
