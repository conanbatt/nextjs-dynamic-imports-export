# nextjs-dynamic-imports-export

Steps to reproduce
```
yarn dev
open http://localhost:3000
```
Page renders "Auth"

```
yarn export
open out/index.html
```
Page renders "Loading..."


If I understood correctly, this happens because next-export render as SSR, but it is very confusing from a dynamic import perspective.

To achieve client side dynamic import in dev and work in the export, the pattern to solve might be:
```
DYNAMIC_IMPORT_SSR=false yarn dev
DYNAMIC_IMPORT_SSR=true yarn build && yarn export

// then
const DynamicComponent = dynamic(() =>
    import('../../next.js-dynamic-import-in-export/components/test'),
    { ssr: process.env.DYNAMIC_IMPORT_SSR, loading: () => <p>Loading...</p>})
```
