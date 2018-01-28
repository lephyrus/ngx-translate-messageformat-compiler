# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

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
