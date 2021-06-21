# How to Create a Web Component in Svelte + Vite
 
To build to custom element we must:

add customElement: true, to the rollup.config.js file:
    plugins: [
        svelte({
            customElement: true,
add in App.svelte
<svelte:options tag="svelte-clock">
