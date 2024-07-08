import { defineConfig } from "vite";

export default defineConfig({
  base: "/", // Root path for Netlify deployment
  build: {
    outDir: "dist", // Output directory for the build
  },
});
