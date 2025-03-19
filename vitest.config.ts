import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    include: ["test/frontend/**/*.test.js"],
    environment: "jsdom",
  },
});
