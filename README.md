# How to Create a Web Component in Svelte + Vite
 
## To build to custom element we must:

Add customElement: true, to the rollup.config.js file:
```
   plugins: [
        svelte({
            customElement: true,
```

Add in App.svelte
```
<svelte:options tag="svelte-app">
<script>
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <count-btn {count} />
</main>

```

Add in Counter.svelte - if you dont do this then the css doesn't work
```
<svelte:options tag="count-btn" />
```
