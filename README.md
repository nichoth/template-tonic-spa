# template tonic
An example of [tonic](https://tonicframework.dev/) + client-side routing.

## use
1. Use the *template* button in github. Or clone this then `rm -rf .git && git init`. Then `npm i && npm init`.

2. Edit the source code in `src/index.js`.

## featuring
* `preversion` npm hook -- use [@nichoth/check-max-deps](https://github.com/nichoth/check-max-deps) to validate the number of dependencies, and lint via `standardx`.
* eslint via [standardx](https://www.npmjs.com/package/standardx) -- `npm run lint`
* type checking via a [jsconfig](https://code.visualstudio.com/docs/languages/jsconfig) file

### Start a local development server
```bash
npm start
```

### build
Create a static website in `public`

```bash
npm run build
```

### structure
This uses client side routing and the single-page-app pattern. You would want to serve the same html for any route that is requested. 

We are using application state in the root component
```js
this.state = {
    route: (location.pathname + location.search),
    count: 0
}
```

And passing state to a child component as a prop:
```js
`<my-count id="count" count=${this.state.count}></my-count>`
```

This means that the state persists between route changes.

### vite
This uses [vite](https://vitejs.dev/) as a development server. This makes it easy to develop as a single page app.

### ESM
We are depending on the browser resolving ES modules. The module `@socketsupply/tonic` is marked as external in the vite config:

```js
{
    build: {
        rollupOptions: {
            external: ['@socketsupply/tonic']
        }
    }
}
```

This pairs with our html file:
```html
<script type="importmap">
    {
        "imports": {
            "@socketsupply/tonic": "./tonic.min.js"
        }
    }
</script>
```
