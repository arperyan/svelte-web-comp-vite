# How to Create a Web Component in Svelte + Vite
 
 
To build to custom element we must:

Add customElement: true, to the rollup.config.js file:
```
import { svelte } from "@sveltejs/vite-plugin-svelte";

const path = require("path");

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.js"),
      name: "MyLib",
    },
    rollupOptions: {
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          svelte: "Svelte",
        },
      },
    },
  },
  plugins: [svelte({
    compilerOptions: {
      customElement: true,
    }
  })],
};
```

Add to package.js
```
"files": [
   "dist"
],
"main": "./dist/count-btn.js",
"module": "./dist/count-btn.es.js",
```

Add in App.svelte
```
<svelte:options tag="svelte-app">
<script>
  import Counter from "./lib/Counter.svelte";
  export let count = 0;
</script>

<main>
  <count-btn {count} />
</main>

```

Add in Counter.svelte - if you don't do this then the css doesn't work
```
<svelte:options tag="count-btn" />
```

Tested in Angular 🥇
