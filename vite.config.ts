import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import prerender from "@prerenderer/rollup-plugin";
// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    tailwindcss(),
    ...(command === "build"
      ? [
          prerender({
            routes: ["/"],
            renderer: "@prerenderer/renderer-puppeteer",
            rendererOptions: {
              headless: true,
              args: ["--no-sandbox", "--disable-setuid-sandbox"],
            },
          }),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
}));
