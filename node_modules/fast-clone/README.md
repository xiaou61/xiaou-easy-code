<center>
	<img src="https://raw.githubusercontent.com/codeandcats/fast-clone/master/logo.png" />
</center>

[![npm version](https://badge.fury.io/js/fast-clone.svg)](https://badge.fury.io/js/fast-clone)
[![Build Status](https://travis-ci.org/codeandcats/fast-clone.svg?branch=master)](https://travis-ci.org/codeandcats/fast-clone)
[![Coverage Status](https://coveralls.io/repos/github/codeandcats/fast-clone/badge.svg?branch=master)](https://coveralls.io/github/codeandcats/fast-clone?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/codeandcats/fast-clone.svg)](https://greenkeeper.io/)


The ***fastest deep cloning*** function on NPM that supports the following types:
- Objects (POJOs, null, undefined)
- Arrays
- Dates
- Regular Expressions
- Strings
- Numbers (NaN, Positive Infinity, Negative Infinity)
- Booleans

## Speed Comparison
Average runtime of various NPM clone libraries on a **large** complex object loaded from json files of varying sizes ranging from 3.5 MB to 15 MB.

Library            |    7.15 MB |
-------------------|------------|
✔ **fast-clone**   | **120 ms** |
✘ deepClone        |   138 ms   |
✘ lodash.cloneDeep |   155 ms   |
✘ snapshot         | 1,127 ms   |
✘ angular.copy     | 1,942 ms   |
✘ clone            | 2,085 ms   |

## Installation

### NPM
```sh
npm install fast-clone --save
```

### Yarn
```sh
yarn add fast-clone
```

## Usage
Fast-clone is a UMD module so you can use it in Node.js, or in Browser either using Browserfy/Webpack, or by using the global clone function if not using a module loader.

### TypeScript
```ts
import clone = require('fast-clone');
```

### JavaScript
```js
const clone = require('fast-clone');
```

```ts
const a = {
	name: 'Natasha Rominov',
	age: 30,
	skills: [
		'Pistols',
		'Espionage'
	],
	dateOfBirth: new Date('1986-05-21T00:00:00.000Z')
};

const b = clone(a);

b.skills.push('That grabby thing she does with her legs');

console.log(a.skills)
console.log(b.skills);
```

Output will be:
```ts
['Pistols', 'Espionage']
['Pistols', 'Espionage', 'That grabby thing she does with her legs']
```

## Contributing
Got an issue or a feature request? [Log it](https://github.com/codeandcats/fast-clone/issues).

[Pull-requests](https://github.com/codeandcats/fast-clone/pulls) are also welcome. 😸
