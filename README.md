# template tonic
An example of [tonic](https://tonicframework.dev/) + client-side routing.

## use
1. Use the *template* button in github. Or clone this then `rm -rf .git && git init`. Then `npm i && npm init`.

2. Edit the source code in `src/index.mjs`.

## featuring
* `preversion` npm hook -- use [@nichoth/check-max-deps](https://github.com/nichoth/check-max-deps) to validate the number of dependencies, and lint via `standardx`.
* eslint via [standardx](https://www.npmjs.com/package/standardx) -- `npm run lint`
* type checking via a [jsconfig](https://code.visualstudio.com/docs/languages/jsconfig) file

### no build tool
We are depending on the browser resolving ES modules.
