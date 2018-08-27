# ESLint config Namics

[![Build Status](https://img.shields.io/travis/namics/eslint-config-namics/master.svg)](https://travis-ci.org/namics/eslint-config-namics)
[![Build Status](https://ci.appveyor.com/api/projects/status/sroqr91h6gjecoqi/branch/master?svg=true)](https://ci.appveyor.com/project/smollweide/eslint-config-namics/branch/master)
[![Dependencies](https://img.shields.io/david/namics/eslint-config-namics/master.svg)](https://david-dm.org/namics/eslint-config-namics)
[![npm](https://img.shields.io/npm/v/@namics/eslint-config.svg)](https://www.npmjs.com/package/@namics/eslint-config)
[![Codestyle](https://img.shields.io/badge/codestyle-namics-green.svg)](https://github.com/namics/eslint-config-namics)

## Installation
```bash
$ npm install --save-dev eslint eslint-plugin-import @namics/eslint-config
```

## Usage ES8 (ES2017)
- `@namics/eslint-config/configurations/es8-browser` - ES8 + browser
- `@namics/eslint-config/configurations/es8-react` - ES8 + react
- `@namics/eslint-config/configurations/es8-node` - ES8 + node

## Usage ES7 (ES2016)
- `@namics/eslint-config/configurations/es7-browser` - ES7 + browser (deprecated)
- `@namics/eslint-config/configurations/es7-react` - ES7 + react (deprecated)
- `@namics/eslint-config/configurations/es7-node` - ES7 + node

## Usage ES6 (ES2015) - deprecated
- `@namics/eslint-config/configurations/es6-browser` - ES6 + browser (deprecated)
- `@namics/eslint-config/configurations/es6-react` - ES6 + react (deprecated)
- `@namics/eslint-config/configurations/es6-node` - ES6 + node (deprecated)

## Usage with Prettier
- [configuration with prettier](./documentation/with-prettier.md)


### .eslintrc.js (add globals here if needed)
```
module.exports = {
  extends: require.resolve('@namics/eslint-config/configurations/es8-browser.js'),
};
```

### .eslintignore
```
/.idea/
/node_modules/
```

### package.json
```
"scripts": {
  "lint": "npm run lint:js",
  "lint:js": "eslint ."
},
```
then run `npm run lint`

### Example usage in project tree
- .eslintrc.js (es8-react)
- .eslintignore
- src
    - app.jsx
- test
    - .eslintrc.js (es8-node)
    - index.js
- scripts
    - .eslintrc.js (es6-node)
    - index.js

## Documentation
- [Best practices](./documentation/best-practices.md) (ES5/6/7/8)
- [Style](./documentation/style.md) (ES5/6/7/8)
- [Variables](./documentation/variables.md) (ES5/6/7/8)
- [Errors](./documentation/errors.md) (ES5/6/7/8)
- [Node](./documentation/node.md) (ES5/6/7/8)
- [ES6](./documentation/es6.md) (ES6/7/8)
- [ES8](./documentation/es8.md) (ES8)
- [Imports](./documentation/imports.md) (ES6/7/8)
- [React](./documentation/react.md) (ES6/7/8)
- [React A11y](./documentation/react-a11y.md) (ES6/7/8)

## Thanks to
* [Namics.](https://www.namics.com/en/)
* [ESLint](https://github.com/eslint/eslint) for ESLint and the documentation [eslint.org](http://eslint.org/)
* [Walmart](https://github.com/walmartlabs) for sharing their config in [eslint-config-walmart](https://github.com/walmartlabs/eslint-config-walmart)
* [AirBnB](https://github.com/airbnb) for sharing their eslint config in [JavaScript Style Guide](https://github.com/airbnb/javascript)

## License
[MIT License](./LICENSE)


## Changelog
Please see the [Releases](https://github.com/namics/eslint-config-namics/releases)
