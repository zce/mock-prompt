# mock-prompt

[![Build Status][travis-image]][travis-url]
[![Coverage Status][codecov-image]][codecov-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![NPM Version][version-image]][version-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> mock inquirer prompt

## Installation

```shell
$ yarn add mock-prompt

# or npm
$ npm install mock-prompt
```

## Usage

```javascript
const mockPrompt = require('mock-prompt')
const result = mockPrompt('zce')
console.log(result)
// => 'zce@zce.me'
```

## API

### mockPrompt(name[, options])

#### name

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; zce <w@zce.me> (https://zce.me/)



[travis-image]: https://img.shields.io/travis/zce/mock-prompt.svg
[travis-url]: https://travis-ci.org/zce/mock-prompt
[codecov-image]: https://img.shields.io/codecov/c/github/zce/mock-prompt.svg
[codecov-url]: https://codecov.io/gh/zce/mock-prompt
[downloads-image]: https://img.shields.io/npm/dm/mock-prompt.svg
[downloads-url]: https://npmjs.org/package/mock-prompt
[version-image]: https://img.shields.io/npm/v/mock-prompt.svg
[version-url]: https://npmjs.org/package/mock-prompt
[license-image]: https://img.shields.io/npm/l/mock-prompt.svg
[license-url]: https://github.com/zce/mock-prompt/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/zce/mock-prompt.svg
[dependency-url]: https://david-dm.org/zce/mock-prompt
[devdependency-image]: https://img.shields.io/david/dev/zce/mock-prompt.svg
[devdependency-url]: https://david-dm.org/zce/mock-prompt?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: http://standardjs.com
