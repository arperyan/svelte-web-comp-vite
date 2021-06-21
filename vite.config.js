import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [svelte()]
// })

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
  plugins: [svelte()],
};
