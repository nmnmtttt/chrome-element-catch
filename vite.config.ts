import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), crx({ manifest: manifest as any }), tsconfigPaths()],
  build: {
    target: "es2015",
    outDir: "dist",
    commonjsOptions: {
      exclude: ["src/*"],
    },
  },
});
