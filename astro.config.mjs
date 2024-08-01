import { defineConfig } from "astro/config";
import postcssJIT from "postcss-jit-props";
import OP from "open-props";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  vite: {
    css: {
      postcss: {
        plugins: [postcssJIT(OP)],
      },
    },
  },
});
