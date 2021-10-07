import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
      {
        find: "~",
        replacement: path.resolve(__dirname, "node_modules"),
      },
    ],
  },
  plugins: [vue()],
});
