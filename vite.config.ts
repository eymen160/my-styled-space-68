import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  server: { host: "::", port: 8080 },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
    },
  },
});
