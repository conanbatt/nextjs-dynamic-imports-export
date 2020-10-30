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


