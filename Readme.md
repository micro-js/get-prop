
# get-prop

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Get nested property from object.

## Installation

    $ npm install @f/get-prop

## Usage

```js
var getProp = require('@f/get-prop')

var obj = {foo: {bar: 'baz'}}
getProp('foo.bar', obj) // => 'baz'
```

## API

### getProp(path, obj)

- `path` - array or dot seperated string specifying path
- `obj` - obj to retrieve property from

**Returns:** property

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/get-prop.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/get-prop
[git-image]: https://img.shields.io/github/tag/micro-js/get-prop.svg
[git-url]: https://github.com/micro-js/get-prop
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/get-prop.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/get-prop
